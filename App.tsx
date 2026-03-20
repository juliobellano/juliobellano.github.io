import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocHeader from './components/DocHeader';
import Toolbar from './components/Toolbar';
import Ruler from './components/Ruler';
import Editor from './components/Editor';
import SidePanel from './components/SidePanel';
import FloatingAction from './components/FloatingAction';
import CV from './pages/CV';
import CVChinese from './pages/CV_Chinese';

const Home: React.FC = () => (
  <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#F9FBFD]">
    <div className="flex-shrink-0 bg-white z-40">
      <DocHeader />
      <Toolbar />
    </div>
    <div className="flex-shrink-0 bg-[#F9FBFD] z-30">
      <Ruler />
    </div>
    <div className="flex flex-1 overflow-hidden relative">
      <Editor />
      <SidePanel />
    </div>
    <FloatingAction />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-english" element={<CV />} />
        <Route path="/cv-chinese" element={<CVChinese />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
