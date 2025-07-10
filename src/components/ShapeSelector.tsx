import React from "react";

interface ShapeSelectorProps {
  shape: string;
  onChange: (shape: string) => void;
}

export const ShapeSelector: React.FC<ShapeSelectorProps> = ({ shape, onChange }) => {
  const shapes = ["circle", "rounded", "square"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Select Shape</h3>
      <div className="flex gap-3">
        {shapes.map((s) => (
          <button
            key={s}
            className={`px-4 py-2 border rounded-md ${
              shape === s ? "bg-blue-500 text-white" : "bg-white border-gray-300"
            }`}
            onClick={() => onChange(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
