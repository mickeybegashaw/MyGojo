"use client";

import { useRouter } from "next/navigation";
const DeleteAndEditButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Do you want to delete this house?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/house/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Failed to delete the house. Please try again.");
        return;
      }

      alert("House deleted successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error deleting the house:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex gap-5 mt-8">
      <button
        onClick={handleDelete}
        className="p-2 border-none bg-red-700 hover:bg-red-600 text-white rounded-lg"
      >
        Delete
      </button>
      <button className="p-2 border-none bg-green-700 hover:bg-green-600 text-white rounded-lg">
        Edit
      </button>
    </div>
  );
};

export default DeleteAndEditButton;
