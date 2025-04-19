import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props;
    return (
        <div>
            <Head>
                <title>SSG</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページはSSGで生成されています</p>
                <p>{message}</p>
                <div style={{ marginTop: "1rem" }}>
                    <Link href="/" style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "#6c757d",
                        color: "white",

                        textDecoration: "none"
                    }}>
                        ホームに戻る
                    </Link>
                </div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にこのページのgetStaticPropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        },
    };
}

export default SSG;