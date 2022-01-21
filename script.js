const canvas = document.getElementById('game_canvas')
const ctx = canvas.getContext('2d')
const gameWidth = 500
const gameHeight = 500
const cellSize = 50

canvas.width = gameWidth
canvas.height = gameHeight

ctx.strokeStyle = 'red'

const countCells = (gameWidth * gameHeight) / (cellSize * cellSize)
let listCells = []

let i = 0
let coordX = 0
let coordY = 0

while (i < countCells) {
    const cell = {
        number: i,
        coordX: coordX,
        coordY: coordY,
        live: false
    }

    listCells.push(cell)
    
    coordX = coordX + cellSize

    if (coordX >= gameWidth) {
        coordY = coordY + cellSize
        coordX = 0
    }

    i++
}

//Написать цикл который рандомно изменит состояние ячеек (свойство live)

for (let index = 0; index < listCells.length; index++) {
    const random =  Math.random() < 0.5 
    const cell =  listCells[index]

    listCells[index].live = Math.random() < 0.5 
}

function drawCells() {
    listCells.forEach(function(cell) {
        ctx.fillStyle = 'black';
        ctx.fillRect(cell.coordX, cell.coordY, cellSize, cellSize);
    
        ctx.fillStyle = cell.live ? 'green' : 'white';
        ctx.fillRect(cell.coordX + 1, cell.coordY + 1, cellSize - 2, cellSize - 2);
    })
}

function findNeighbors(cell) {
    const diaposon = {
        topPoint: {
            x: cell.coordX - cellSize,
            y: cell.coordY - cellSize
        },
        bottomPoint: {
            x: cell.coordX + cellSize,
            y: cell.coordY + cellSize,
        }
    }


    const cellsFinds = listCells.filter((cellCheck) => {
        if(cellCheck.coordX >= diaposon.topPoint.x && cellCheck.coordX  <= diaposon.bottomPoint.x) {
            if (cellCheck.coordY >= diaposon.topPoint.y && cellCheck.coordY  <= diaposon.bottomPoint.y) {
                if (cellCheck.number != cell.number) {
                    return true
                }
            }
        }

        return false
    })

    return cellsFinds
}


function checkLiveCell(cell) {
    const neighbors = findNeighbors(cell)
    const liveNeighborsCount = neighbors.filter(neighbor => neighbor.live).length
    const deadNeighborsCount = neighbors.filter(neighbor => !neighbor.live).length
    let live = false

    if (!cell.live && liveNeighborsCount == 3) {
        live = true
    }

    if (cell.live) {
        if (liveNeighborsCount == 2 || liveNeighborsCount == 3) {
            live = true
        } else {
            live = false
        }
    }

    return live
}

function checkLiveCells() {
    const newlistCells = []
    
    listCells.forEach(cell => {
        cell.live = checkLiveCell(cell)
        newlistCells.push(cell)
    })

    listCells = newlistCells
}



setInterval(() => {
    checkLiveCells()
    drawCells()
}, 100)


//Написать функцию которая принимает на входе номер клетки, а возвращает все соседние клетки

function sosednie() {




}


