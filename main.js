const weightInput = document.getElementById("weightInput")
const heightInput = document.getElementById("heightInput")

const bmiResult = document.createElement("h1") //element that contains the result
bmiResult.setAttribute("id", "result") //add an id attribute for bmiResult so it gets style

function calculate() {
    document.body.appendChild(bmiResult)
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value / 100)
    let isHeightDecimal = (heightInput.value).toString().includes('.');
    
    if(weight > 0 && height > 0 && weight <= 500 && (heightInput.value) <= 300 && !isHeightDecimal){
    let BMI = (weight) / (height * height)

    console.log(BMI.toFixed(2))
    bmiResult.innerHTML = `BMI: ${BMI.toFixed(2)}`
    }else{
        console.error("Please, use a valid number");
        bmiResult.innerHTML = "Please, use a valid number"
    }
}
