import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
    id: string;
    timestamp: number;
}
const Post: NextPage<PostProps> = (props) => {
    const { id, timestamp } = props;
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページはSSGで生成されています</p>
                <p>
                    Post ID: {id}
                </p>
                <p>
                    <span>更新日時: {new Date(timestamp).toLocaleString()}</span>
                </p>
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

export const getStaticPaths: GetStaticPaths = () => {
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
    ];
    return {
        paths,
        fallback: false,
    }
}

interface PostParams extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = (context) => {
    return {
        props: {
            id: context.params!.id,
            timestamp: Date.now(),
        },
    };
}

export default Post;