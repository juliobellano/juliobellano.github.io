import React from 'react';

const Editor: React.FC = () => {
  return (
    <div
      className="flex-1 bg-[#F8F9FA] flex justify-center overflow-y-auto h-full relative"
      id="scroll-container"
    >
      {/* Outline Button */}
      <div className="fixed left-4 top-36 p-2 text-[#5F6368] hover:bg-[#E8EAED] rounded-full cursor-pointer hidden lg:block">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </svg>
      </div>

      <div className="py-4 pb-24">
        <div
          className="
            bg-white
            shadow-[0_0_8px_rgba(60,64,67,0.15)]
            w-[816px]
            min-h-[1056px]
            px-[96px]
            py-[96px]
            outline-none
          "
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <div
            className="
              font-sans
              text-[13pt]
              text-[#202124]
              leading-[1.6]
            "
          >
            <p className="mb-4">
              <span>Hi, my name is </span>

              <span
                className="
                  italic
                  underline
                  font-bold
                  text-[18pt]
                  text-[#4285F4]
                "
              >
                Julio
              </span>
            </p>

            <p className="mb-1">
              Here is my linked in:{' '}
              <a
                href="https://www.linkedin.com/in/juliobellano/"
                target="_blank"
                rel="noreferrer"
                contentEditable={false}
                className="
                  text-[#4285F4]
                  italic
                  underline
                  cursor-pointer
                  hover:text-[#1A73E8]
                "
              >
                https://www.linkedin.com/in/juliobellano/
              </a>
            </p>

            <p className="mb-4">
              This is my GitHub:{' '}
              <a
                href="https://github.com/juliobellano"
                target="_blank"
                rel="noreferrer"
                contentEditable={false}
                className="
                  text-[#4285F4]
                  italic
                  underline
                  cursor-pointer
                  hover:text-[#1A73E8]
                "
              >
                https://github.com/juliobellano
              </a>
            </p>

            <p className="mb-2">
              Check me out on{' '}
              <span className="font-medium">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">O</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              :{' '}
              <a
                href="https://www.google.com/search?q=Who+is+Julio+Bellano+Laksana&udm=50"
                target="_blank"
                rel="noreferrer"
                contentEditable={false}
                className="rainbow-link"
              >
                Press me →
              </a>
            </p>

            <p className="flex items-center text-[#4285F4] italic font-bold text-[18pt]">
              /
              <span className="w-[2px] h-[24px] bg-[#4285F4] ml-0.5 cursor-blink"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
