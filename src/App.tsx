import React, { useEffect, useState } from "react";
import "./App.css";
const NProgress = window.NProgress;
function App() {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    NProgress.configure({ minimum: 0.01 });
    NProgress.start();
    const timer = setInterval(() => {
      console.log(NProgress.status);
      if (NProgress.status === 0.994) {
        setProgress(100);
        clearInterval(timer);
        NProgress.done();
      }
      setProgress(Number((NProgress.status * 100).toFixed(0)));
    }, 100);

    setTimeout(() => {
      NProgress.set(0.5);
      NProgress.inc();
    }, 2000);
    return () => {
      NProgress.done();
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">{progress}</header>
    </div>
  );
}

export default App;
