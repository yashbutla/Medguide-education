import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, country } = body;

    // Here you would typically save to a database
    console.log("Registration received:", { name, phone, country });

    // Mock success response
    return NextResponse.json({ success: true, message: "Registration successful" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 400 });
  }
}
