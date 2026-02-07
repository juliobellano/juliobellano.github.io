import React from 'react';
import DocHeader from './components/DocHeader';
import Toolbar from './components/Toolbar';
import Ruler from './components/Ruler';
import Editor from './components/Editor';
import SidePanel from './components/SidePanel';
import FloatingAction from './components/FloatingAction';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#F9FBFD]">
      {/* Top Section: Header & Toolbar */}
      <div className="flex-shrink-0 bg-white z-40">
        <DocHeader />
        <Toolbar />
      </div>
      
      {/* Ruler Section */}
      <div className="flex-shrink-0 bg-[#F9FBFD] z-30">
        <Ruler />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        <Editor />
        <SidePanel />
      </div>

      {/* Floating Action Button */}
      <FloatingAction />
    </div>
  );
};

export default App;