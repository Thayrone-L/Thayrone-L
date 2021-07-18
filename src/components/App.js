import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Meu parágrafo em React</p>
        <p>Meu segundo parágrafo</p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    );

  }
}
export default App;