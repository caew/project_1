import Link from 'next/Link';

import{ useState } from 'react';

function Home  () {
    return (<div>
            <h1>CAEW IS TOP 10</h1>
            <link href="/sobre">
                <a>Acessar Página Sobre</a>

            </Link>
            
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


