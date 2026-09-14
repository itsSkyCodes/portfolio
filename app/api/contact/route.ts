import { NextResponse } from "next/server";

import { submitContact } from "@/lib/contact";

/** Accept a contact submission and deliver it through Brevo on the server. */
export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 415 });
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > 20_000) {
    return NextResponse.json({ ok: false, message: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const result = await submitContact(body, clientIp(request));
  const headers = new Headers();
  if (result.retryAfterSeconds) {
    headers.set("Retry-After", String(result.retryAfterSeconds));
  }

  return NextResponse.json(result.body, { status: result.status, headers });
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const raw = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return raw.slice(0, 64);
}
