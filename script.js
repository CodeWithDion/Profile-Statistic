//1. Declare this variable for all counter
const countersEl = document.querySelectorAll(".counter");

//2. Use forEach Method
countersEl.forEach(counterEl => {
    counterEl.innerText = "0";
    incrementCounter();

    //3. create this function for find the increment value for each iteration
    function incrementCounter() {
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 50);
        } else {
            counterEl.innerText = dataCeil;
        }
    }
})
