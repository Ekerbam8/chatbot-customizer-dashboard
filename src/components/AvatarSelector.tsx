import React from "react";

interface AvatarSelectorProps {
  selected: string;
  onSelect: (value: string) => void;
}

const avatarOptions = [
  { name: "Cartoon Man", file: "/avatars/man.png" },
  { name: "Cartoon Woman", file: "/avatars/woman.png" },
  { name: "Dog", file: "/avatars/dog.png" },
];

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  selected,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {avatarOptions.map((avatar) => (
        <div
          key={avatar.name}
          onClick={() => onSelect(avatar.file)}
          className={`p-2 border-2 rounded-2xl cursor-pointer ${
            selected === avatar.file ? "border-blue-500" : "border-transparent"
          } hover:border-gray-400 transition`}
        >
          <img
            src={avatar.file}
            alt={avatar.name}
            className="w-24 h-24 object-contain mx-auto"
          />
          <p className="text-center text-sm mt-2">{avatar.name}</p>
        </div>
      ))}
    </div>
  );
};
