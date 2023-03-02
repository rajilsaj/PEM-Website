import React from 'react';
import './App.css';

import IntroSection from './components/header-comp/introSection';
import HeaderSection from './components/header-comp/headerSection';
import { ChurchLife } from './components/sections/churchLifeComp';
import { BiblicalComp } from './components/sections/biblicalComp';
import { FooterComponent } from './components/footer/footerSection';


function App() {
  return (
    <div className="App">
        <div className="header">
            <HeaderSection />
            <IntroSection />
        </div>
        
        <ChurchLife />
        <BiblicalComp />
        <FooterComponent />
    </div>
  );
}
export default App;