import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      name: "mriganka",
      age: 25,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //   Validation
  if (!body.name) {
    return NextResponse.json({ error: "Provide valid Name" }, { status: 400 });
  }

  return NextResponse.json({ id: 5137, name: body.name }, { status: 201 });
}
