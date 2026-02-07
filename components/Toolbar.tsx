import React from 'react';
import { 
  Undo, Redo, Printer, SpellCheck, PaintRoller, ZoomIn, 
  Bold, Italic, Underline, Highlighter, Link, MessageSquarePlus, 
  Image, AlignLeft, List, ListOrdered, Indent, Outdent, X,
  ChevronDown, Minus, Plus, Baseline, MoreVertical,
  CheckSquare
} from 'lucide-react';

const Divider = () => <div className="h-5 w-[1px] bg-gray-300 mx-1 flex-shrink-0" />;

const ToolbarButton: React.FC<{ 
  children: React.ReactNode; 
  active?: boolean;
  hasDropdown?: boolean;
  className?: string;
}> = ({ children, active, hasDropdown, className = "" }) => (
  <button 
    className={`
      flex items-center justify-center gap-0.5 p-1 rounded-[4px] mx-[1px] flex-shrink-0 transition-colors select-none
      ${active ? 'bg-[#e0e9f8] text-[#0b57d0]' : 'text-[#444746] hover:bg-gray-100'}
      ${className}
    `}
  >
    {children}
    {hasDropdown && <ChevronDown size={10} className="ml-0.5" strokeWidth={3} />}
  </button>
);

const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center px-3 py-1.5 bg-[#edf2fa] rounded-full mx-4 mb-2 overflow-x-auto no-scrollbar gap-0.5 shadow-sm min-h-[44px]">
      <ToolbarButton><Undo size={18} /></ToolbarButton>
      <ToolbarButton><Redo size={18} /></ToolbarButton>
      <ToolbarButton><Printer size={18} /></ToolbarButton>
      <ToolbarButton><SpellCheck size={18} /></ToolbarButton>
      <ToolbarButton><PaintRoller size={18} /></ToolbarButton>
      
      <Divider />
      
      <ToolbarButton hasDropdown className="px-2">
        <span className="text-sm font-medium text-[#444746]">100%</span>
      </ToolbarButton>
      
      <Divider />
      
      <ToolbarButton hasDropdown className="px-2">
        <span className="text-sm font-medium text-[#444746]">Normal text</span>
      </ToolbarButton>
      
      <Divider />
      
      <ToolbarButton hasDropdown className="px-2 min-w-[80px] justify-between">
        <span className="text-sm font-medium truncate text-[#444746]">Arial</span>
      </ToolbarButton>
      
      <div className="flex items-center border-l border-r border-gray-300 mx-1 px-1">
        <ToolbarButton><Minus size={14} /></ToolbarButton>
        <div className="border border-gray-300 rounded px-1 py-0.5 mx-1 bg-white hover:border-black w-[40px] flex justify-center h-[26px] items-center">
          <input 
             type="text" 
             defaultValue="13" 
             className="w-full text-center text-sm text-[#444746] bg-transparent focus:outline-none font-medium"
          />
        </div>
        <ToolbarButton><Plus size={14} /></ToolbarButton>
      </div>
      
      <Divider />
      
      <ToolbarButton active><Bold size={18} /></ToolbarButton>
      <ToolbarButton active><Italic size={18} /></ToolbarButton>
      <ToolbarButton active><Underline size={18} /></ToolbarButton>
      <ToolbarButton active>
        <div className="flex flex-col items-center justify-center">
          <Baseline size={16} />
          <div className="h-1 w-4 bg-[#0b57d0] mt-[1px]"></div>
        </div>
      </ToolbarButton>
      <ToolbarButton>
        <Highlighter size={18} />
      </ToolbarButton>
      
      <Divider />
      
      <ToolbarButton><Link size={18} /></ToolbarButton>
      <ToolbarButton><MessageSquarePlus size={18} /></ToolbarButton>
      <ToolbarButton><Image size={18} /></ToolbarButton>
      
      <Divider />
      
      <ToolbarButton hasDropdown><AlignLeft size={18} /></ToolbarButton>
      <ToolbarButton><div className="flex flex-col items-center space-y-[2px]"><div className="w-4 h-[2px] bg-current"/><div className="w-4 h-[2px] bg-current"/><div className="w-4 h-[2px] bg-current"/></div></ToolbarButton>
      <ToolbarButton hasDropdown><CheckSquare size={18} /></ToolbarButton>
      <ToolbarButton hasDropdown><List size={18} /></ToolbarButton>
      <ToolbarButton hasDropdown><ListOrdered size={18} /></ToolbarButton>
      <ToolbarButton><Indent size={18} /></ToolbarButton>
      <ToolbarButton><Outdent size={18} /></ToolbarButton>
      <ToolbarButton><div className="text-lg leading-none scale-x-150 scale-y-75 pb-1">\</div><span className="sr-only">Clear Formatting</span></ToolbarButton>
      
    </div>
  );
};

export default Toolbar;