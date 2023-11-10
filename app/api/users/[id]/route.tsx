import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import prisma from "@/prisma/client";
interface Props {
  params: {
    id: string;
  };
}

// Request need to be the first parameter
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return NextResponse.json({ error: "The user not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the body
  // If empty --> status 400
  // Validate the user
  // if greater than 25 ---> status 404
  //return --> the updated body

  const user = await request.json();

  const validation = schema.safeParse(user);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  if (+id > 25) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 5137, name: user.name }, { status: 200 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (+id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
}
