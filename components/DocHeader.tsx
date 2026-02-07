import React from 'react';
import { DocsLogo } from './Icons';
import { 
  Star, 
  FolderInput, 
  CloudCheck, 
  History, 
  MessageSquareText, 
  Video, 
  Lock,
  User
} from 'lucide-react';

const DocHeader: React.FC = () => {
  const menus = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Extensions', 'Help'];

  return (
    <header className="flex flex-col bg-white z-50">
      <div className="flex items-center justify-between px-3 py-2">
        {/* Left Side: Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full p-1.5">
            <DocsLogo />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                defaultValue="My Website." 
                className="text-[18px] text-[#1f1f1f] leading-tight border border-transparent hover:border-black rounded-[4px] px-1.5 py-[1px] -ml-1.5 w-48 bg-transparent focus:bg-white focus:outline-none focus:border-[#1a73e8] transition-colors"
              />
              <div className="flex items-center gap-1 text-[#444746]">
                <button className="p-1 hover:bg-gray-100 rounded-full"><Star size={18} /></button>
                <button className="p-1 hover:bg-gray-100 rounded-full"><FolderInput size={18} /></button>
                <button className="p-1 hover:bg-gray-100 rounded-full"><CloudCheck size={18} /></button>
              </div>
            </div>
            
            <div className="flex items-center text-[14px] text-[#1f1f1f] mt-0.5 select-none">
              {menus.map((menu) => (
                <div 
                  key={menu} 
                  className="px-1.5 py-0.5 rounded-[4px] hover:bg-gray-100 cursor-pointer"
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full text-[#444746]">
            <History size={22} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-[#444746]">
            <MessageSquareText size={22} />
          </button>
          
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-full text-[#444746]">
              <Video size={24} />
            </button>
            <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
            <button className="flex items-center gap-2 bg-[#c2e7ff] hover:bg-[#b3d7ef] text-[#001d35] px-4 py-2.5 rounded-full transition-colors font-medium text-sm">
              <Lock size={16} />
              <span>Share</span>
            </button>
          </div>
          
          <div className="ml-2 w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-medium cursor-pointer hover:ring-4 ring-gray-100">
            J
          </div>
        </div>
      </div>
    </header>
  );
};

export default DocHeader;