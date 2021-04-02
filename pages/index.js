import Link from 'next/link';

function Home () {
    return (<div>
            <h1>Home</h1>

            <Link href="/sobre">
                <a>Acessar Página Sobre</a>

            </Link>

            <h1> 
                <Link href="/tempo">
                <a>Acessar Página Tempo</a>

                </Link>
            </h1>
            
    </div>)
}

export default Home


