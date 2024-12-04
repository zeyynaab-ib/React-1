import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const firstName = "Dieynabou"; // Remplacez par votre prénom ou laissez vide

  return (
    <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="mt-4">
        <h4>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h4>
        {firstName && <img src="https://via.placeholder.com/150" alt="Profile" className="mt-3" />}
      </div>
    </div>
  );
};

export default App;
