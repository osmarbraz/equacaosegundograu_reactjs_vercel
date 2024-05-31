import { useState } from 'react';
import './App.css';

function FrmEquacaoSegundoGrau() {
 
    // Estados inciais das variáveis do formulário
    const [valorA, setValorA] = useState(0);    
    const [valorB, setValorB] = useState(0);
    const [valorC, setValorC] = useState(0);
    const [resposta, setResposta] = useState({a: 0, b: 0, c: 0, delta:0, x1: 0, x2:0});
  
    // Submissão do formulário.
    const handleSubmit = (event) => {
      // Impede o recarregamento da página
      event.preventDefault();      
      //Endereço da API + "/raizes" + "/" + valorA + "/" + valorB + "/" + valorC
      fetch(`https://equacaosegundograu-nodejs-vercel.vercel.app/raizes/${valorA}/${valorB}/${valorC}`)
        .then((response) => response.json()) //Converte a resposta para JSON
        .then((data) => setResposta({a: data.a, b : data.b, c: data.c, delta: data.delta, x1: data.x1, x2: data.x2})); //Atribui a resposta as variáveis
    }

    // Limpa os campos do formulário.     
    const limpar = () => { 
      setValorA(0);
      setValorB(0);      
      setValorC(0);
      setResposta({a: 0, b: 0, c: 0, delta:0, x1: 0, x2:0});
    }
  
    // Renderiza o formulário
    return (      
      <form name="FrmEquacaoSegundoGrau" method="get" onSubmit={handleSubmit}>
        <label><h1>Formulário Equação 2o Grau</h1> </label>
        <label>Valor A: 
        <input type="text" id="valorA" name="valorA" value={valorA} onChange={(event) => setValorA(event.target.value)}/>
        </label><br/>
        <label>Valor B: 
        <input type="text" id="valorB" name="valorB" value={valorB} onChange={(event) => setValorB(event.target.value)} />
        </label><br/>
        <label>Valor C: 
        <input type="text" id="valorB" name="valorC" value={valorC} onChange={(event) => setValorC(event.target.value)} />
        </label><br/><br/>
        <input type="button" name="Limpar" value="Limpar" onClick={limpar} />
        <input type="submit" name="Calcular" value="Calcular"/><br/><br/>

        <label>Resultado: </label><br/>
        <label>delta: {resposta.delta} </label><br/>
        <label>x1: {resposta.x1} </label><br/>
        <label>x2: {resposta.x2} </label><br/>
    </form>
    )
  }
  
  export default FrmEquacaoSegundoGrau;