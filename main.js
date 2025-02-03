const weightInput = document.getElementById("weightInput")
const heightInput = document.getElementById("heightInput")

const e = document.createElement("h1") //elemento h1 que contem o resultado
e.setAttribute("id", "result") //adiciona um atributo ao elemento, no caso o elemento id de valor result

function calculate() {
    document.body.appendChild(e)
    let weight = parseFloat(weightInput.value)
    let height = parseFloat(heightInput.value / 100)
    
    if(!isNaN(weight && height)){
    let BMI = (weight) / (height * height)
    console.log(BMI.toFixed(2))
    e.innerHTML = `BMI: ${BMI.toFixed(2)}`
    }else{
        console.error("You need to use numbers");
        e.innerHTML = "You need to use numbers"
    }
}