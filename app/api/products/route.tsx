import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      price: 2.5,
    },
    {
      id: 2,
      name: "Bread",
      price: 3.5,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const validation = schema.safeParse(data);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({
    id: 1000,
    name: data.name,
    price: data.price,
  });
}
