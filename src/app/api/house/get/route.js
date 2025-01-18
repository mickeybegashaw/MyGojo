import connect from "@/lib/db";
import House from "@/model/House.model";
import { NextResponse } from "next/server";

// Handle GET request to fetch all houses
export const GET = async () => {
  try {
    await connect();
    const houses = await House.find();
    return NextResponse.json(houses, { status: 200 }); 
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error occurred." }, { status: 500 });
  }
};
