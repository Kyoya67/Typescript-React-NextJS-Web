import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type SSRProps = {
    message: string;
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props;

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングによって生成されました
                </p>
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
        </>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
    const timestamp = Date.now();
    const message = `${timestamp}にこのページのサーバーサイドレンダリングが実行されました`;
    console.log(message);

    return {
        props: {
            message,
        },
    };
};

export default SSR;