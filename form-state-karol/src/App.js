import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // ESTADO DE DADOS DE NOME
  const [nome, setNome] = useState("");

  // ESTADO DE DADOS DE E-MAL
  const [email, setEmail] = useState("");

  // ESTADO DE DADOS DE SENHA
  const [senha, setSenha] = useState("");

  function cadastrarUsuario(event){
    event.preventDefault();
    // alert('TESTE DE SUBMIT!');
    alert(`NOME: ${nome} E-MAIL: ${email} SENHA: ${senha}`)
    
}

  // FUNÇÃO DE CADASTRAR
  return (
    <div className="App">
      <form onSubmit={cadastrarUsuario} className='form'>

        <h1>FORMULÁRIO DE CADASTRO</h1>

        <input
        type='text'
        placeholder="DIGITE SEU NOME AQUI"
        required
        value={nome}
        onChange={(event)=>{setNome(event.target.value)}}/>

        <input
        type='email'
        placeholder="DIGITE SEU E-MAIL AQUI"
        required
        value={email}
        onChange={(event)=>{setEmail(event.target.value)}}/>

        <input
        type='password'
        placeholder="DIGITE SUA SENHA AQUI"
        required
        value={senha}
        onChange={(event)=>{setSenha(event.target.value)}}/>
        
        <button type='submit'>CADASTRAR</button>

      </form>
    </div>
  );
}

export default App;
