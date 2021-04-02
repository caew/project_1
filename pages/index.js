import{ useState } from 'react';

function Home  () {
    return (
        <div>
            <h4>CAEW IS TOP 10</h4>

            <a href="/sobre">Acessar Página Sobre</a>

            <Contador />
            
        </div>
    )
}

function Contador () {
            const [contador, setContador] = useState(1);
            
            function adicionarContador (){
                setContador( contador + 1 );
                }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
     )
}


export default Home;


