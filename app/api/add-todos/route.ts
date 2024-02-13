// app/api/handleData.js
import todos from "@/data/db.json";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Parse the JSON body from the request
  const data = await req.json();
  const newData = [data, ...todos];
  // Perform actions with the data
  // For demonstration purposes, we'll just log the data and return it

  // Send a response indicating success
  return NextResponse.json({ message: "Data received successfully", newData });
}
