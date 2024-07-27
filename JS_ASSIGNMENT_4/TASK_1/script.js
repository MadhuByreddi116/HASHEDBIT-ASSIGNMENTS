function swapTheme() 
        {
            const appVal = document.getElementById("app");
            const swapButton = document.getElementById("swap");

            appVal.classList.toggle("day");
            appVal.classList.toggle("night");

            swapButton.classList.toggle("button_day");
            swapButton.classList.toggle("button_night");
        }