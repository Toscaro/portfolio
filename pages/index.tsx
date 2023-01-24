import React from "react";
import { GetStaticProps } from "next/types";
import { getAbout } from "../lib/data-interface";

export default function Home({about}) {
    const aboutString =  JSON.stringify(about);
    return (
        <div>
            <h1>Name = {about.name}</h1>
            <h1>Nick = {about.nickName}</h1>
            <h1>JSONStringFy = {aboutString}</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const about = await getAbout();

    return {
        props: {
            about: about
        },
        revalidate: 86400, //Day in seconds
    };
}