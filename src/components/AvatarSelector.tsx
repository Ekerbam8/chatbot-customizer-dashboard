import React from "react";

interface AvatarSelectorProps {
  avatar: string;
  onChange: (avatar: string) => void;
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ avatar, onChange }) => {
  const avatars = ["man.svg", "woman.svg"];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Select Avatar</h3>
      <div className="flex gap-4">
        {avatars.map((img) => (
          <img
            key={img}
            src={`/avatars/${img}`}
            alt={img}
            onClick={() => onChange(img)}
            className={`w-16 h-16 rounded-full border-2 cursor-pointer ${
              avatar === img ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
