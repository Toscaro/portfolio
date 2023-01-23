import { NavBar } from '../components/NavBar';
import Head from 'next/head';

const LayoutBase = ({children}) => {
    return (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>
        </Head>
        <NavBar />
        {children}
    </div>
    )
}

export default LayoutBase