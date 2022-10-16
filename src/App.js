import Desktop from './components/Desktop';
import React, {createElement, useCallback, useEffect, useRef, useState } from 'react';
import Tablet from './components/Tablet';
import Mobile from './components/Mobile';


// Controls whether to display Desktop, Tablet, or Mobile version

function App() {
  const [windowWidth, _setWindowWidth] = useState(window.innerWidth);

  const windowWidthRef = useRef(windowWidth);

  const setWindowWidth = () => {
    console.log('wsss');
    windowWidthRef.current = window.innerWidth;
    _setWindowWidth(window.innerWidth);
  }

  
  useEffect (() => {

    window.addEventListener('resize', setWindowWidth);

    return () => window.removeEventListener('resize', setWindowWidth);
  }, [])

  if (windowWidth > 768) return <Desktop />
  else if (windowWidth > 480) return <Tablet />
  else return <Mobile />

}

export default App;
