function criaCalculadora() {

    return {
        display: document.querySelector(".display"),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener("keyup", (e) => {
                console.log(e.keyCode);
                if (e.keyCode === 13) {
                    this.realizaConta();
                }

            });

        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if (!conta) {
                }
                this.display.value = String(conta);
                this.display.focus();


            } catch (e) {
                setTimeout(() => {
                    this.display.value = "";
                    this.display.style.color = "rgb(0, 255, 106)";
                    this.display.focus();
                }, 1000)
                this.display.value = "Syntax error ";
                this.display.style.color = "red";
                return;
            }

        },

        clearDisplay() {
            this.display.value = "";
        },

        backEspace() {
            this.display.value = this.display.value.slice(0, -1)
        },



        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (!e.pointerType == "") {
                    if (el.classList.contains("btn-num")) {
                        this.btnParaDisplay(el.innerText);
                    }
                    else if (el.classList.contains("btn-clear")) {
                        this.clearDisplay();
                    }
                    else if (el.classList.contains("btn-del")) {
                        this.backEspace();
                    }
                    else if (el.classList.contains("btn-eq")) {
                        this.realizaConta();
                    }
                }
            });
        },

        btnParaDisplay(valor) {
            console.log("opa")
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();

calculadora.inicia();