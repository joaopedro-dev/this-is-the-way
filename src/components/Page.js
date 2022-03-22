import Head from "next/head";

function Page({title, description, children}){
    return(
        <div>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anounymos"/>
            <link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet"/>
            <title>{title}</title>
            <meta name="description" content="{description}"/>
            </Head>
            {children}
        </div>
    )
}

export default Page

