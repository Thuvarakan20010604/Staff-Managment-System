"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Home from "../StaffDetails/page";
import PersonalDetails from "../PersonalDetails/page";

export default function StaffPage() {
  const router = useRouter();

  // Handle click event to navigate to PersonalDetails page
  const handleClick = () => {
    router.push("/PersonalDetails");
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Staff Details</h1>
      
      {/* Button to navigate to PersonalDetails */}
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Add New Staff
      </button>

      {/* Rendering the Home Component (optional, based on your requirement) */}
      <Home />
    </div>
  );
}
