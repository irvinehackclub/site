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
            console.log('[AI] token:', this.token);
            this._loading = false;
            this._bodyPrepped = false;
        }

        async ask (prompt) {
            console.log('[AI] asking:', prompt);

            const { response } = await fetch(aiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: this.token,
                    prompt
                })
            }).then(res => res.json());

            console.log('[AI] response:', response);

            return response;
        }

        set loading (load) {
            this._loading = load;
            document.body.setAttribute('data-aisdk-loading', load);
            if (!this._bodyPrepped) {
                document.body.innerHTML += `<div id="aisdk-loading"><div class="aisdk-loading-spinner"></div></div><style>
#aisdk-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.2s ease;
}
body[data-aisdk-loading="true"] #aisdk-loading {
    opacity: 1;
}
#aisdk-loading-spinner {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #fff;
    border-top-color: #000;
    animation: spin 1s ease infinite;
}


                </style>`;
                this._bodyPrepped = true;
            }
        }

        get loading () {
            return this._loading;
        }
    }

    window.AI = AI;
})();