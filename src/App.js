import React from 'react';
import routes from './routes';
import Header from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '4em' }}>{routes}</div>
    </div>
  );
}

export default App;
