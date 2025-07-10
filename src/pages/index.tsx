// File: src/pages/index.tsx
import { useState } from 'react';
import { ColorPicker } from '../components/ColorPicker';
import { ShapeSelector } from '../components/ShapeSelector';
import { AvatarSelector } from '../components/AvatarSelector';
import { PreviewWindow } from '../components/PreviewWindow';

export default function Home() {
  const [color, setColor] = useState('#4f46e5');
  const [shape, setShape] = useState('rounded');
  const [avatar, setAvatar] = useState('man');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chatbot Customizer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ColorPicker color={color} onChange={setColor} />
          <ShapeSelector shape={shape} onChange={setShape} />
          <AvatarSelector avatar={avatar} onChange={setAvatar} />
        </div>
        <PreviewWindow color={color} shape={shape} avatar={avatar} />
      </div>
    </div>
  );
}
