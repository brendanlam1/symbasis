import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire up to an email/CRM provider (e.g. Resend, SendGrid, HubSpot)
  // before launch. This currently accepts submissions without delivering them.
  console.log("New Symbasis contact submission:", body);

  return NextResponse.json({ ok: true });
}
