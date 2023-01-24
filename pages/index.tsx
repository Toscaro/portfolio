import React from "react";
import { GetStaticProps } from "next/types";

export default function HelloWorld({about}) {
    const aboutString =  JSON.stringify(about);
    return (
        <div>
            <h1>{about.name}</h1>
            <h1>Nick = {about.nickName}</h1>
            <h1>JSONStringFy = {aboutString}</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const result = await fetch(`http://localhost:3000/api/about`);
    const json = await result.json();
    
    return {
        props: {
            about: json.about
        },
        revalidate: 86400, //Day in seconds
    };
}