import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    const result = await sql`SELECT 1 as status`;
    return NextResponse.json({
      status: "ok",
      database: "connected",
      neon: result,
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      {
        status: "error",
        database: "disconnected",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
