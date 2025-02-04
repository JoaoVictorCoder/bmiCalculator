const weightInput = document.getElementById("weightInput")
const heightInput = document.getElementById("heightInput")


const e = document.createElement("h1") //elemento h1 que contem o resultado
e.setAttribute("id", "result") //adiciona um atributo ao elemento, no caso o elemento id de valor result

function calculate() {
    document.body.appendChild(e)
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value / 100)
    let isHeightDecimal = (heightInput.value).toString().includes('.');
    
    if(!isNaN(weight && height) && (weight > 0 && height > 0) && (weight < 300 && height < 300) && !isHeightDecimal){
    let BMI = (weight) / (height * height)

    console.log(BMI.toFixed(2))
    e.innerHTML = `BMI: ${BMI.toFixed(2)}`
    }else{
        console.error("Please, use a valid number");
        e.innerHTML = "Please, use a valid number"
    }
}