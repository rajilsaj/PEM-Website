import React from 'react';
import './App.css';

import IntroSection from './components/header-comp/introSection/introSection';
import HeaderSection from './components/header-comp/headerSection/headerSection';

function App() {
  return (
  <div className="App">
    
    <div className="header">
      <HeaderSection />
      <IntroSection />
    </div>

    {/* Section 1 */}
    <section className=''>

    </section>
      {/* Section 2 */}
      <section className=''>

      </section>
        {/* Section 3 */}
        <section className=''>

        </section>
          {/* Footer  */}
          <footer className=''>

          </footer>
    </div>
  );
}

export default App;
