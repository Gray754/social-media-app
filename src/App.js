import React from 'react';
import routes from './routes';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div style={{ paddingTop: '4em' }}>{routes}</div>
    </div>
  );
}

export default App;
