import React from 'react';

const Editor: React.FC = () => {
  return (
    <div className="flex-1 bg-[#F9FBFD] flex justify-center overflow-y-auto h-full relative" id="scroll-container">
      {/* Outline Button */}
      <div className="fixed left-4 top-36 p-2 text-[#444746] hover:bg-gray-200 rounded-full cursor-pointer hidden lg:block">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/></svg>
      </div>

      <div className="py-4 pb-24">
        <div 
          className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] w-[816px] min-h-[1056px] px-[96px] py-[96px] outline-none"
          contentEditable={true} // Just for the feel, though we control content
          suppressContentEditableWarning={true}
        >
          <div className="font-['Arial'] text-[13pt] text-black leading-[1.6]">
            
            <p className="mb-4">
              <span className="text-black">Hi, my name is </span>
              <span className="text-[#1055CC] italic underline font-bold text-[18pt]">Julio</span>
            </p>

            <p className="mb-1">
              Here is my linked in: <a href="https://www.linkedin.com/in/juliobellano/" target="_blank" rel="noreferrer" contentEditable={false} className="text-[#1055CC] italic underline cursor-pointer hover:text-[#0b4eb5]">https://www.linkedin.com/in/juliobellano/</a>
            </p>

            <p className="mb-4">
              This is my GitHub: <a href="https://github.com/juliobellano" target="_blank" rel="noreferrer" contentEditable={false} className="text-[#1055CC] italic underline cursor-pointer hover:text-[#0b4eb5]">https://github.com/juliobellano</a>
            </p>

            <p className="mb-2">
              Check me out on ChatGPT:{' '}
              <a
                href="https://chatgpt.com/?q=Julio%20Bellano%20Laksana&hints=search&model=auto"
                target="_blank"
                rel="noreferrer"
                contentEditable={false}
                className="rainbow-link"
              >
                Press me →
              </a>
            </p>

            <p className="flex items-center text-[#1055CC] italic font-bold text-[18pt]">
              / <span className="w-[2px] h-[24px] bg-[#1055CC] ml-0.5 cursor-blink"></span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
