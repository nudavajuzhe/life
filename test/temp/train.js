let temperaturaInput = document.getElementById('temperatura')
let maxTemperaturaInput = document.getElementById('max_temperatura')
let minTemperaturaInput = document.getElementById('min_temperatura')
let messageDiv = document.getElementById('message_text')

function checkTemp() {
    let temperatura = temperaturaInput.value
    let maxtemperatura = maxTemperaturaInput.value
    let mintemperatura = minTemperaturaInput.value
    let text = 'no check'

    if (temperatura <= mintemperatura) {
        text = "Slishkom holodno!"
    }

    if (temperatura >= maxtemperatura) {
        text = "Goryacho!"
    }

    if (temperatura > mintemperatura && temperatura < maxtemperatura) {
        text = "Temperatura v norme"
    }

    messageDiv.innerText = text    // перезаписывает? сначала пустота
}

function reset() {
    temperaturaInput.value = ''
    maxTemperaturaInput.value = ''
    minTemperaturaInput.value = ''
}
