import React from 'react';

const Ruler: React.FC = () => {
  // Creating tick marks programmatically
  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i < 82; i++) {
      const isMajor = i % 10 === 0;
      const height = isMajor ? 'h-2.5' : 'h-1.5';
      ticks.push(
        <div 
          key={i} 
          className={`absolute bottom-0 border-l border-gray-400 ${height}`}
          style={{ left: `${(i / 80) * 100}%` }}
        >
          {isMajor && i !== 0 && (
            <span className="absolute -top-3 -left-1 text-[9px] text-gray-500 font-medium">
              {i / 10}
            </span>
          )}
        </div>
      );
    }
    return ticks;
  };

  return (
    <div className="relative h-6 bg-[#f0f0f0] border-b border-gray-300 w-[816px] mx-auto select-none flex-shrink-0 mb-1">
      {renderTicks()}
      
      {/* Left Margin Indicator */}
      <div className="absolute top-0 left-[96px] h-full z-10 group cursor-ew-resize">
         {/* Top triangle */}
         <div className="absolute top-0 -left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0b57d0]"></div>
         {/* Bottom rectangle/triangle combo */}
         <div className="absolute bottom-0 -left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#0b57d0]"></div>
      </div>

      {/* Right Margin Indicator */}
      <div className="absolute top-0 right-[96px] h-full z-10 cursor-ew-resize">
        <div className="absolute top-0 -left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0b57d0]"></div>
      </div>
      
      {/* White space indicating usable area */}
      <div className="absolute top-0 left-[96px] right-[96px] h-full bg-white opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default Ruler;