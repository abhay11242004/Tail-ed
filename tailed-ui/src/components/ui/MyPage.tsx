import React from "react";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
export function MyPage() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-6 space-y-8">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <img
          src="../../../images/Screenshot 2024-11-20 130413.png"
          alt="Profile"
          className="w-27 h-24 mx-auto rounded-full border-2 border-gray-300"
        />
        <h1 className="text-xl font-bold mt-4">Abhay Patel</h1>
        <p className="text-gray-600 mt-2">
          Seeking an internship 
        </p>
      </Card>
      <div className="w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Projects</h2>
        <Carousel>
          <Card className="p-4 shadow">
            <h3 className="text-lg font-bold">Poem Website</h3>
            <p>A responsive website showcasing poems using PostgreSQL and having user account creations and authentication.</p>
          </Card>
          <Card className="p-4 shadow">
            <h3 className="text-lg font-bold">HomeCalendar App</h3>
            <p>An Calendar app to create events showcasing them and filtering them using SQLite</p>
          </Card>
        </Carousel>
      </div>
    </div>
  );
}
