import { useState } from 'react';
import NewsLetter from './sections/NewsLetter';
import NewsLetterSuccess from './sections/NewsLetterSuccess';

function App() {
  const [goto, setGoto] = useState('newsletter');
  const handleGoto = (page) => {
    setGoto(page);
  };
  return (
    <div className="w-screen h-screen bg-charcoal-grey flex justify-center items-center">
      {goto === 'newsletter' ? (
        <NewsLetter handleGoto={handleGoto} />
      ) : (
        <NewsLetterSuccess handleGoto={handleGoto} />
      )}
    </div>
  );
}

export default App;
