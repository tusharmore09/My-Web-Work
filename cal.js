function appendToDisplay(value) {
            document.getElementById("display").value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = "";
        }

        function removeDigit() {
            let currentDisplay = document.getElementById("display").value;
            if (currentDisplay.length > 0) {
                document.getElementById("display").value = currentDisplay.slice(0, -1);
            }
        }

        function calculateResult() {
            try {
                const result = eval(document.getElementById("display").value);
                document.getElementById("display").value = result;
            } catch (error) {
                document.getElementById("display").value = "Error";
            }
        }

        function calculatepercentage(value) {
            if (value === '%') {
                if (display.value !== '') {
                    let inputValue = parseFloat(display.value);
                    let result = inputValue / 100;
                    display.value = result;
                }
            }
        }