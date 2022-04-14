const img = document.getElementById('img')
const buttons = document.getElementById('buttons')

const trafficlight = (event) => {
    turnOn[event.target.id]()
}

const changeColor = () => {
    const color = 'red';
    turnOn[color]()
}
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener(`click`, trafficlight)