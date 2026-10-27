
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div>
      <h1>My React Application</h1>

      <a href="#" onClick={(e) => {
        e.preventDefault();
        setPage('Home');
      }}>Home</a>
      {' | '}

      <a href="#" onClick={(e) => {
        e.preventDefault();
        setPage('About');
      }}>About</a>
      {' | '}

      <a href="#" onClick={(e) => {
        e.preventDefault();
        setPage('Contact');
      }}>Contact</a>

      <hr />

      {page === 'Home' && <h2>Welcome to Home Page</h2>}
      {page === 'About' && <h2>This is About Page</h2>}
      {page === 'Contact' && <h2>This is Contact Page</h2>}
    </div>
  );
}

export default App;
