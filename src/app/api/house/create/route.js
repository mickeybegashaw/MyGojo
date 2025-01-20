import connect from "@/lib/db";
import House from "@/model/House.model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connect();
    const { name, address, description, type, beds, bath, price, images } = await request.json();

    // Validate if all required fields are provided
    if (!name || !address || !description || !type || !beds || !bath || !price || !images) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create the new house listing
    const createdHouse = await House.create({
      name,
      address,
      description,
      type,
      beds,
      bath,
      price,
      images,
    });

    // Return the created house with a success status
    return NextResponse.json(createdHouse, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred while creating the listing",
    }, { status: 500 });
  }
};
