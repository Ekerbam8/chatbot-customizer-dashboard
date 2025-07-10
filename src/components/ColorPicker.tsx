import React from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#6B7280"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Select Chatbot Color</h3>
      <div className="flex gap-3">
        {colors.map((c) => (
          <div
            key={c}
            className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
              color === c ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: c }}
            onClick={() => onChange(c)}
          />
        ))}
      </div>
    </div>
  );
};
