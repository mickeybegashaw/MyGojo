import { NextResponse } from "next/server";
import mongoose from "mongoose";
import House from "@/model/House.model";

export async function DELETE(req, { params }) {
  const { id } = params; 

  try {
    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "No house found with this id" },
        { status: 400 }
      );
    }

    const deletedHouse = await House.findByIdAndDelete(id);

    if (!deletedHouse) {
      return NextResponse.json(
        { error: "No house found with this id" },
        { status: 404 }
      );
    }

    // Return the deleted house
    return NextResponse.json(
      { message: "House deleted successfully", data: deletedHouse },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete house" },
      { status: 500 }
    );
  }
}
