import '../styles.css'
import LayoutBase from "../components/LayoutBase";
import Head from 'next/head'
import { AppProps } from "next/app";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <LayoutBase>
        <Component {...pageProps} />
    </LayoutBase>)
  }