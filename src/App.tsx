import React from 'react';
import './App.css';
import { ChurchLife } from './components/sections/churchLifeComp';
import { BiblicalComp } from './components/sections/biblicalComp';
import { FooterComponent } from './components/footer/footerSection';
import {Hero} from './components/header-comp/hero';


function App() {
  return (
    <div className="App">
        <Hero />
        <ChurchLife />
        <BiblicalComp />
        <FooterComponent />
    </div>
  );
}
export default App;