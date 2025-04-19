import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import SampleImage from "../public/sample.png";

const ImageSample: NextPage = () => {
    return (
        <div style={{ textAlign: "center", width: "80%", margin: "30px auto" }}>
            <h1>Imageコンポーネントのサンプル</h1>
            <p>
                <Image src={SampleImage} alt="サンプル画像" layout="intrinsic" />
            </p>
            <h1 style={{ marginTop: "2rem" }}>imgタグのサンプル</h1>
            <p style={{ width: "100%", height: "auto" }}>
                <img src="/sample.png" alt="サンプル画像" style={{ width: "100%", height: "auto" }} />
            </p>
            <Link href="/"
                style={{
                    marginTop: "20px",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#6c757d",
                    color: "white",
                    textDecoration: "none"
                }}>ホームに戻る
            </Link>
        </div>
    )
}

export default ImageSample;
