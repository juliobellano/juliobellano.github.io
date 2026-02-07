import React from 'react';
import { PenLine, MessageSquare } from 'lucide-react';

const FloatingAction: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-20 flex flex-col items-end gap-3 z-50">
      <div className="w-[56px] h-[130px] bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-between py-1 group cursor-pointer hover:shadow-xl transition-shadow">
          <button className="flex-1 w-full flex items-center justify-center hover:bg-gray-50 rounded-t-full text-[#0b57d0]">
             <PenLine size={24} />
          </button>
          <div className="w-8 h-[1px] bg-gray-200"></div>
          <button className="flex-1 w-full flex items-center justify-center hover:bg-gray-50 rounded-b-full text-[#0b57d0]">
              <MessageSquare size={24} />
          </button>
      </div>
    </div>
  );
};

export default FloatingAction;