import { useState, useEffect } from "react";

function SayHello() {
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("api/hello")
            .then(res => res.json())
            .then(profile => setName(profile.name));
    }, []);

    return (
        <div>
            <h1>こんにちは、{name}さん！</h1>
        </div>
    )
}

export default SayHello;