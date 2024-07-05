let display = document.getElementById('input1');

//for Del
const wipe = () => {
    display.value = '';
}
        
        function binaryToDecimal() {
            const binaryInput = document.getElementById("input1").value;
            const decimalResult = parseInt(binaryInput, 2);
            document.getElementById("result").textContent = decimalResult;
        }

        function decimalToBinary() {
            const decimalInput = document.getElementById("input1").value;
            const binaryResult = Number(decimalInput).toString(2);
            document.getElementById("result").textContent = binaryResult;
        }

        function decimalToOctal() {
            const decimalInput = document.getElementById("input1").value;
            const octalResult = Number(decimalInput).toString(8);
            document.getElementById("result").textContent = octalResult;
        }

        function octalToDecimal() {
            const octalInput = document.getElementById("input1").value;
            const decimalResult = parseInt(octalInput, 8);
            document.getElementById("result").textContent = decimalResult;
        }

        function decimalToHex() {
            const decimalInput = document.getElementById("input1").value;
            const hexResult = Number(decimalInput).toString(16);
            document.getElementById("result").textContent = hexResult;
        }

        function hexToDecimal() {
            const hexInput = document.getElementById("input1").value;
            const decimalResult = parseInt(hexInput, 16);
            document.getElementById("result").textContent = decimalResult;
        }

        function binaryAddition() {
            const binaryInput1 = document.getElementById("binaryInput1").value;
            const binaryInput2 = document.getElementById("binaryInput2").value;

            const decimalResult = parseInt(binaryInput1, 2) + parseInt(binaryInput2, 2);
            const binaryResult = decimalResult.toString(2);

            document.getElementById("result").textContent = binaryResult;
        }
  