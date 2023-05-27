import './App.css';
import Desktop from './components/os/Desktop';

// import { useEffect } from 'react';
// import { isMobile } from 'react-device-detect';

function App() {
  // useEffect(() => {
  //   if (isMobile) {
  //     window.location.href = 'https://m.kearneyjohn.com/';
  //   }
  // }, []);

  return (
    <div className="App">
      <Desktop />
    </div>
  );
}

export default App;
