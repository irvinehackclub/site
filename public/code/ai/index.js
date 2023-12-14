
(() => {      
    const aiEndpoint = "https://irvine.hackclub.com/api/ai";

    function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
      }

      window.$ = (...args) => document.getElementById(...args);

    class AI {
        constructor (token) {
            this.token = token || getCookie("vaqprojid");
            console.log('[AI] token:', this.token);

            const spinner = document.getElementById('spinner');

            if (spinner) {
                spinner.innerHTML = `<div class="showbox">
                <div class="loader">
                  <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                  </svg>
                </div>
              </div>`;
              this.spinner = spinner;

              spinner.style.width = '100%';
              spinner.style.display = 'none';

              var style = document.createElement('style');
style.innerHTML = `

.loader {
  position: relative;
  margin: 0 auto;
  width: 100px;
}
.loader:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.circular {
  -webkit-animation: rotate 2s linear infinite;
          animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@-webkit-keyframes color {
  100%, 0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
}
@keyframes color {
  100%, 0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
}
body {
  background-color: #eee;
}

.showbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
}`;
document.head.appendChild(style);

            }
        }

        async ask (prompt) {
            console.log('[AI] asking:', prompt);

            if (this.spinner) this.spinner.style.display = 'block';

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

            if (this.spinner) this.spinner.style.display = 'none';
            return response;
        }

    }

    window.AI = AI;
})();