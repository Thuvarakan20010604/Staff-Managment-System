//"use client";
import React from "react";

//import { useRouter } from "next/navigation";
import PersonalDetails from "../PersonalDetails/page";
import Database from "../db/page";

export default function Home() {
  //const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      
      
      <Database/>
    </div>
  );
}
