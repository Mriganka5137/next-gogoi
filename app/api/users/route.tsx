import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  //   Validation
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 5137, name: body.name }, { status: 201 });
}
