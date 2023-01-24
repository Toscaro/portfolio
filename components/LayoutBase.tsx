import { NavBar } from './NavBar';
import Head from 'next/head';
import React from 'react';

const LayoutBase = ({children}) => {
    return (
    <div>
        <Head>
            <title>Lucas Toscaro</title>
        </Head>
        <NavBar />
        {children}
    </div>
    )
}

export default LayoutBase