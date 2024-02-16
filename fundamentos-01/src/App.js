// import logo from './logo.svg';
import cavernas from './livros/cavernas_aco.jpg';
import correntes from './livros/correntes_espaco.jpg';
import './App.css';


function App() {
  return(
    <div className="App">

      <h3>As cavernas de aço</h3>

      <p>Isaac Asimov</p>

      <img src={cavernas} width={300} alt='Capa do livro "As cavernas de aço"'/>

      <p>As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais. A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro. Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas. Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, levando os humanos a perderem seus empregos e privilégios de cidadãos.</p>

      <h3>As correntes do espaço</h3>

      <p>Isaac Asimov</p>

      <img src={correntes} width={300} alt='Capa do livro: "As correntes do espaço"'></img>

    </div>
  );
}

export default App;
