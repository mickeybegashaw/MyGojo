import connect from "@/lib/db";
import House from "@/model/House.model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connect();
    const { id } = params;  

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid house ID format." }, { status: 400 });
    }

    const house = await House.findById(id);
    if (!house) {
      return NextResponse.json({ error: "House not found." }, { status: 404 });
    }

    return NextResponse.json(house, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error occurred." }, { status: 500 });
  }
};
