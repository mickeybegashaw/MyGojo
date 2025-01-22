import connect from "@/lib/db";
import House from "@/model/House.model";
import { NextResponse } from "next/server";

// Handle GET request to fetch houses by user_id from query parameters
export const GET = async (req) => {
  const user_id = req.nextUrl.searchParams.get('user_id'); // Extract user_id from query parameters

  if (!user_id) {
    return NextResponse.json({ error: "user_id is required" }, { status: 400 });
  }

  try {
    await connect();
    const houses = await House.find({ posted_by: user_id });

    return NextResponse.json(houses, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error occurred." }, { status: 500 });
  }
};
