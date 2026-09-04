export default function merge(boxElem, direction) {
  let score = 0;

    if (direction === "left") {

        for (let start = 0; start < 16; start += 4) {

            for (let i = start; i < start + 3; i++) {

                if (
                    boxElem[i].textContent &&
                    boxElem[i].textContent === boxElem[i + 1].textContent
                ) {

                    boxElem[i].textContent =
                        Number(boxElem[i].textContent) * 2;

                    score += Number(boxElem[i].textContent) * 2;
                        

                    boxElem[i + 1].textContent = "";

                    i++;
                }
            }
        }
    }

    else if (direction === "right") {

        for (let start = 3; start < 16; start += 4) {

            for (let i = start; i > start - 3; i--) {

                if (
                    boxElem[i].textContent &&
                    boxElem[i].textContent === boxElem[i - 1].textContent
                ) {

                    boxElem[i].textContent =
                        Number(boxElem[i].textContent) * 2;

                    score += Number(boxElem[i].textContent) * 2;

                    boxElem[i - 1].textContent = "";

                    i--;
                }
            }
        }
    }

    else if (direction === "up") {

        for (let start = 0; start < 4; start++) {

            for (let i = start; i < 12; i += 4) {

                if (
                    boxElem[i].textContent &&
                    boxElem[i].textContent === boxElem[i + 4].textContent
                ) {

                    boxElem[i].textContent =
                        Number(boxElem[i].textContent) * 2;

                    score += Number(boxElem[i].textContent) * 2;

                    boxElem[i + 4].textContent = "";

                    i += 4;
                }
            }
        }
    }

    else if (direction === "down") {

        for (let start = 12; start < 16; start++) {

            for (let i = start; i > 3; i -= 4) {

                if (
                    boxElem[i].textContent &&
                    boxElem[i].textContent === boxElem[i - 4].textContent
                ) {

                    boxElem[i].textContent =
                        Number(boxElem[i].textContent) * 2;

                    score += Number(boxElem[i].textContent) * 2;

                    boxElem[i - 4].textContent = "";

                    i -= 4;
                }
            }
        }
    }

  return score;
}