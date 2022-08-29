import './App.css';
import React from 'react';

function App() {
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();
  const letters = ['Hello', 'World'];

  setTimeout(() => {
    ref.current.classList.add('out');
  }, 2900);

  const handleEnd = () => {
    ref.current.classList.remove('out');
    setIndex((prev) => (prev + 1 === letters.length ? 0 : prev + 1));
  };

  return (
    <h1 className='App' ref={ref} onTransitionEnd={handleEnd}>
      {letters[index]}
    </h1>
  );
}

export default App;
