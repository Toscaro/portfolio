import LayoutBase from "../components/LayoutBase";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
    <LayoutBase>
        <Component {...pageProps} />
    </LayoutBase>)
  }