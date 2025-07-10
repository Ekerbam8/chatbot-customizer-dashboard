import React from "react";

interface PreviewWindowProps {
  color: string;
  shape: string;
  avatar: string;
}

export const PreviewWindow: React.FC<PreviewWindowProps> = ({ color, shape, avatar }) => {
  const shapeStyles: Record<string, string> = {
    circle: "rounded-full",
    rounded: "rounded-xl",
    square: "rounded-none",
  };

  return (
    <div className="mt-6 p-6 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
      <div className="flex items-center gap-4">
        <img
          src={`/avatars/${avatar}`}
          alt="avatar"
          className={`w-16 h-16 ${shapeStyles[shape]}`}
        />
        <div
          className={`px-4 py-2 text-white ${shapeStyles[shape]}`}
          style={{ backgroundColor: color }}
        >
          Hi! I'm your AI receptionist.
        </div>
      </div>
    </div>
  );
};
