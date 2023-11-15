import EmailTemplate from "../../../emails/EmailTemplate";
import { NextResponse } from "next/server";
import react from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "gogoimriganka09@gmail.com",
      to: "mrigankagogoiofficial.com",
      subject: "Hello world",
      react: EmailTemplate({ name: "mriganka" }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
