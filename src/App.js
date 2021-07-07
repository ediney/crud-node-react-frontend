import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Usuário:</label>
        <input type="text" name="movieName" />
        <label>Senha:</label>
        <input type="text" name="review" />

        <button>ENTRAR</button>
      </div>
    </div>
  );
}

export default App;
