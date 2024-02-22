
function Livro(titulo, autor, imagem, descricao){
    return(
        <div className='cardBook'>

        <h3>{titulo}</h3>
        <p>{autor}</p>
        <img src={imagem} width={300} alt='Capa do livro "As cavernas de aço"'/>

        <p>
            {descricao}
        </p>

        </div>
    );
}

export default Livro;