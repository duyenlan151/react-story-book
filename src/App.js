import React from 'react';
import './App.css';

import Book from './components/Book';

function App() {
  return (
    <div className="container">
      <div className="book-story">
        <Book 
          title="đắc nhân tâm" 
          description="first new"
          index="1"
        />
      </div>
    </div>
  );
}

export default App;
