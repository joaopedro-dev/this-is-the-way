import Head from "next/head";

function Page({title, description, children}){
    return(
        <div>
            <Head>
            <title>{title}</title>
            <meta name="description" content="{description}"/>
            </Head>
            {children}
        </div>
    )
}

export default Page

