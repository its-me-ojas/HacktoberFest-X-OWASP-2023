import './App.css'
import { useState, useEffect } from 'react';
function App() {
  const [binaryStream, setBinaryStream] = useState(generateRandomBinaryStream());

  // Function to generate a random binary stream
  function generateRandomBinaryStream() {
    return Array.from({ length: window.innerWidth }, () =>
      Math.random() < 0.5 ? '0' : '1'
    ).join('');
  }

  // Update the binary stream on a timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBinaryStream(generateRandomBinaryStream());
    }, 150); // Update every 100 milliseconds

    return () => {
      clearInterval(intervalId); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className='binStream'>
      {binaryStream}
    </div>
  );
}

export default App
