(() => {
    const aiEndpoint = "https://irvine.hackclub.com/api/ai";

    function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
      }

    class AI {
        constructor (token) {
            this.token = token || getCookie("vaqprojid");
        }

        async ask (prompt) {
            const response = await fetch(aiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: this.token,
                    prompt
                })
            }).then(res => res.json());

            return response;
        }
    }

    window.AI = AI;
})();