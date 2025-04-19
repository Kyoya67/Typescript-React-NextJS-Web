import { GetServerSideProps, NextPage } from "next";
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
                <p>このページはSSRで生成されています</p>
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

interface PostParams extends ParsedUrlQuery {
    id: string;
}

export const getServerSideProps: GetServerSideProps<PostProps, PostParams> = async (context) => {
    const { id } = context.params!;

    // ここでデータベースやAPIからデータを取得する処理を実装できます
    // 例: const post = await fetchPostById(id);

    return {
        props: {
            id,
            timestamp: Date.now(),
        },
    };
}

export default Post;