import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (Number(request.headers.get("content-length")) > 4096) {
      return NextResponse.json({ error: "Invalid search request." }, { status: 400 });
    }
    const body = await request.json();
    const validZip = typeof body?.zip === "string" && /^\d{5}$/.test(body.zip);
    const validCoordinates = typeof body?.latitude === "number" && Number.isFinite(body.latitude)
      && body.latitude >= -90 && body.latitude <= 90
      && typeof body?.longitude === "number" && Number.isFinite(body.longitude)
      && body.longitude >= -180 && body.longitude <= 180;
    if (!validZip && !validCoordinates) {
      return NextResponse.json({ error: "Enter a valid five-digit ZIP code." }, { status: 400 });
    }
    const payload = validZip ? { zip: body.zip } : { latitude: body.latitude, longitude: body.longitude };
    const response = await fetch("https://presidentialmoonrocks.com/api/dispensaries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    return NextResponse.json(await response.json(), {
      status: response.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Locator service is temporarily unavailable." }, { status: 502 });
  }
}
