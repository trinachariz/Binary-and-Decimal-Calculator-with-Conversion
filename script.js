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

  function binaryToHexadecimal() {
    const binaryInput2 = document.getElementById("input1").value;
    const decimalInput = parseInt(binaryInput2, 2);
    const hexadecimalInput = decimalInput.toString(16);
    document.getElementById("result").textContent = hexadecimalInput.toUpperCase();
  }

  function hexadecimalToBinary() {
    const hexadecimal = document.getElementById("input1").value;
    const binary = parseInt(hexadecimal, 16).toString(2);
    document.getElementById("result").textContent= binary;
  }
  
  function binaryToOctal() {
    const binaryInput4 = document.getElementById("input1").value;
    const decimalInput4 = parseInt(binaryInput4, 2);
    const octalInput2 = decimalInput4.toString(8);
    document.getElementById("result").textContent= octalInput2;
  }

  function octalToBinary() {
    const octalInput3 = document.getElementById("input1").value;
    var decimalInput5 = parseInt(octalInput3, 8);
    var binaryInput5 = (decimalInput5 >>> 0).toString(2);
    document.getElementById("result").textContent = binaryInput5;
  }

  function binaryAddition() {
    const binaryInput1 = document.getElementById("binaryInput1").value;
    const binaryInput2 = document.getElementById("binaryInput2").value;

    const decimalResult = parseInt(binaryInput1, 2) + parseInt(binaryInput2, 2);
    const binaryResult = decimalResult.toString(2);

    document.getElementById("result").textContent = binaryResult;
}
