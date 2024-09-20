import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home({ version }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
                <main className={styles.main}>
                    <h1 className={styles.title}>The app is running version: {version}</h1>
                    <p className={styles.quote}>
                        “The traditional model is that you take your software to the wall that
                        separates development and operations, and throw it over and then forget
                        about it. Not at Amazon. You build it, you run it.”
                    </p>
                    <p>— Werner Vogels, CTO at Amazon.com, 2006</p>
                </main>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const { version } = require("../../package.json");
    return { props: { version } };
}
