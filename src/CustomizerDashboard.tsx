import React, { useState } from "react";
import { AvatarSelector } from "./components/AvatarSelector";

const colorOptions = ["blue", "green", "pink", "purple", "orange"];
const shapeOptions = ["square", "rounded", "circle"];
const positionOptions = ["bottom-left", "bottom-right"];

export default function CustomizerDashboard() {
  const [selectedAvatar, setSelectedAvatar] = useState("/avatars/man.png");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedShape, setSelectedShape] = useState("rounded");
  const [selectedPosition, setSelectedPosition] = useState("bottom-right");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chatbot Customizer</h1>

      {/* Avatar Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Choose an Avatar</h2>
        <AvatarSelector selected={selectedAvatar} onSelect={setSelectedAvatar} />
      </div>

      {/* Color Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Choose a Chat Bubble Color</h2>
        <div className="flex gap-4">
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-4 transition ${
                selectedColor === color ? "border-black" : "border-transparent"
              } bg-${color}-500`}
            />
          ))}
        </div>
      </div>

      {/* Shape Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Choose Chat Bubble Shape</h2>
        <div className="flex gap-4">
          {shapeOptions.map((shape) => (
            <button
              key={shape}
              onClick={() => setSelectedShape(shape)}
              className={`px-4 py-2 rounded-lg border ${
                selectedShape === shape ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              {shape}
            </button>
          ))}
        </div>
      </div>

      {/* Position Selection */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Choose Chatbot Position</h2>
        <div className="flex gap-4">
          {positionOptions.map((pos) => (
            <button
              key={pos}
              onClick={() => setSelectedPosition(pos)}
              className={`px-4 py-2 rounded-lg border ${
                selectedPosition === pos ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <div className="border p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div className="flex items-center gap-4">
          <img
            src={selectedAvatar}
            alt="Chatbot Avatar"
            className="w-20 h-20 object-contain"
          />
          <div
            className={`p-4 text-white bg-${selectedColor}-500 ${
              selectedShape === "circle"
                ? "rounded-full"
                : selectedShape === "rounded"
                ? "rounded-lg"
                : "rounded-none"
            }`}
          >
            Hello! How can I help you today?
          </div>
        </div>
      </div>
    </div>
  );
}
