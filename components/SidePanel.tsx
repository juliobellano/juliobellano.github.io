import React from 'react';
import { 
  Calendar, 
  Lightbulb, 
  CheckCircle2, 
  UserCircle2, 
  MapPin, 
  Plus 
} from 'lucide-react';

const SideIcon: React.FC<{ 
  icon: React.ReactNode; 
  color?: string; 
  className?: string; 
}> = ({ icon, color, className }) => (
  <div 
    className={`w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors mb-4 ${className}`}
    style={{ color }}
  >
    {icon}
  </div>
);

const SidePanel: React.FC = () => {
  return (
    <div className="w-[56px] flex-shrink-0 bg-[#f9fbfd] flex flex-col items-center py-4 border-l border-gray-200 hidden md:flex">
      {/* Calendar (Yellow/Blueish) */}
      <SideIcon 
        icon={<Calendar size={22} />} 
        className="text-[#fbbc04]" 
      />
      
      {/* Keep (Yellow bulb) */}
      <SideIcon 
        icon={<Lightbulb size={22} />} 
        className="text-[#fbbc04]" 
      />
      
      {/* Tasks (Blue check) */}
      <SideIcon 
        icon={<CheckCircle2 size={22} />} 
        className="text-[#2684fc]" 
      />
      
      {/* Contacts (Blue user) */}
      <SideIcon 
        icon={<UserCircle2 size={22} />} 
        className="text-[#2684fc]" 
      />
      
      {/* Maps (Red pin) */}
      <SideIcon 
        icon={<MapPin size={22} />} 
        className="text-[#ea4335]" 
      />
      
      <div className="w-5 h-[1px] bg-gray-300 my-2"></div>
      
      <SideIcon 
        icon={<Plus size={22} />} 
        className="text-[#444746]" 
      />
    </div>
  );
};

export default SidePanel;