import connect from "@/lib/db";
import House from "@/model/House.model";
import { NextResponse } from "next/server";

// Handle POST request to create a new house
export const POST = async (request) => {
  try {
    const { name, description, address, type, beds, bath, price, image } =
      await request.json();
    await connect();

    const newHouse = await House.create({
      name,
      description,
      address,
      type,
      beds,
      bath,
      price,
      image,
    });

    return NextResponse.json(newHouse, { status: 201 }); // ✅ Correct response with 201 status
  } catch (error) {
    console.error("Error creating house:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the house." },
      { status: 500 }
    ); // ✅ Clear error message
  }
};
