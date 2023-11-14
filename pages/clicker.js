import { useEffect } from "react";

const url = 'https://firewalledreplit.com/@IanMadden2/ClickerGame-Template?forkRepl=15afb76e-b5f2-4a51-a57a-1c72ddb68a83&forkContext=coverPage&redirecting=1';

export default function Clicker () {
    useEffect(() => {
        window.location.replace(url);
    }, []);

    return (
        <p>Redirecting...<br />If you aren't redirected, click <a href={url}>here</a>.</p>
    );
}