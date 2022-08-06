import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Time from './components/Times';

import listaDeTimes from './times.json';



function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicional = (colaborador) => {
    
    // Faz o spread e junta os colaboradores novos com os antigos
    setColaboradores([...colaboradores, colaborador])
    
  }

  return (
    <main className="App">
      <Banner />
      <Form nomeTimes={listaDeTimes.times.map(time => time.nome)} aoCalaboradorCadastrado={colaborador => aoNovoColaboradorAdicional(colaborador)} />
    
      {/* Renderiza as cores personalizadas de cada seção de times */}
      {listaDeTimes.times.map(time => <Time
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        // Faz o filtro variável colaborador e procura o nome, caso os nomes forem igual de true
        equipe={colaboradores.filter(colaborador => colaborador.time === time.nome )}
        
        />)}

        <Footer />
    </main>
  );
}

export default App;
