import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: {
    id: number;
  };
}

// Request need to be the first parameter
export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "The user not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 5, name: "mriganka" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the body
  // If empty --> status 400
  // Validate the user
  // if greater than 25 ---> status 404
  //return --> the updated body

  const user = await request.json();
  if (!user.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (id > 25) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 5137, name: user.name }, { status: 200 });
}
