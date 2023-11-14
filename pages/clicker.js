import { useEffect } from "react";

const url = 'https://firewalledreplit.com/@IanMadden2/ClickerGame-Template';

export default function Clicker () {
    useEffect(() => {
        window.location.replace(url);
    }, []);

    return (
        <p>Redirecting...<br />If you aren't redirected, click <a href={url}>here</a>.</p>
    );
}