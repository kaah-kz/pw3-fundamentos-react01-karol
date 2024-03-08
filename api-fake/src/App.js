// import logo from './logo.svg';
import './App.css';
import CreateUser from './components/CreateUser';
import Users from './components/Users';

// useState ajuda a manipular estados de dados.
// useEffect manipula dados externos.

function App() {
  return (
    <div className="App">
      {/* <h1>ACESSANDO E CONSUMINDO A API DE TESTES REQRES</h1> */}
      {/* <Users/> */}
      <CreateUser/>
    </div>
  );
}

export default App;