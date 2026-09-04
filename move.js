export default function move(boxElem, event) {

    // =========================
    // UP
    // =========================
    if (event.key === 'ArrowUp' || event.key === 'w') {

        let target = 0;

        for (let i = 0; i < 16; i += 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target += 4;
            }
        }

        target = 1;

        for (let i = 1; i < 16; i += 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target += 4;
            }
        }

        target = 2;

        for (let i = 2; i < 16; i += 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target += 4;
            }
        }

        target = 3;

        for (let i = 3; i < 16; i += 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target += 4;
            }
        }
    }


    // =========================
    // DOWN
    // =========================
    else if (event.key === 'ArrowDown' || event.key === 's') {

        let target = 12;

        for (let i = 12; i >= 0; i -= 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target -= 4;
            }
        }

        target = 13;

        for (let i = 13; i >= 1; i -= 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target -= 4;
            }
        }

        target = 14;

        for (let i = 14; i >= 2; i -= 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target -= 4;
            }
        }

        target = 15;

        for (let i = 15; i >= 3; i -= 4) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target -= 4;
            }
        }
    }


    // =========================
    // LEFT
    // =========================
    else if (event.key === 'ArrowLeft' || event.key === 'a') {

        let target = 0;

        for (let i = 0; i < 4; i++) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target++;
            }
        }

        target = 4;

        for (let i = 4; i < 8; i++) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target++;
            }
        }

        target = 8;

        for (let i = 8; i < 12; i++) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target++;
            }
        }

        target = 12;

        for (let i = 12; i < 16; i++) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target++;
            }
        }
    }


    // =========================
    // RIGHT
    // =========================
    else if (event.key === 'ArrowRight' || event.key === 'd') {

        let target = 3;

        for (let i = 3; i >= 0; i--) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target--;
            }
        }

        target = 7;

        for (let i = 7; i >= 4; i--) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target--;
            }
        }

        target = 11;

        for (let i = 11; i >= 8; i--) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target--;
            }
        }

        target = 15;

        for (let i = 15; i >= 12; i--) {
            if (boxElem[i].textContent) {

                if (target !== i) {
                    boxElem[target].textContent = boxElem[i].textContent;
                    boxElem[i].textContent = "";
                }

                target--;
            }
        }
    }
}
