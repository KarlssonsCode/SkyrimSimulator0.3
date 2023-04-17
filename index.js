
let playerX = 3
let playerY = 3
let treasureX = Math.floor(Math.random() * 5) + 1;
let treasureY = Math.floor(Math.random() * 5) + 1;
let enemyX = Math.floor(Math.random() * 5) + 1;
let enemyY = Math.floor(Math.random() * 5) + 1;
let worldpictures = ['skyrim1.gif', 'skyrim2.gif', 'skyrim3.gif', 'skyrim4.gif', 'skyrim5.gif', 'skyrim6.gif', 'skyrim7.gif', 'skyrim8.gif', 'skyrim9.gif', 'skyrim10.gif'
    , 'skyrim11.gif', 'skyrim12.gif', 'skyrim13.gif', 'skyrim14.gif', 'skyrim15.gif', 'skyrim16.gif', 'skyrim17.gif', 'skyrim18.gif', 'skyrim19.gif',
    'skyrim20.gif', 'skyrim21.gif', 'skyrim22.gif', 'skyrim23.gif', 'skyrim24.gif', 'skyrim25.gif',]
drawmap()
getjoke()



function drawmap() {
    let table = "";

    table += "<table class='map'>"

    for (let mapY = 1; mapY < 6; mapY++) {
        table += "<tr>"

        for (let mapX = 1; mapX < 6; mapX++) {
            if (mapY == playerY && mapX == playerX) {
                table += "<td style='background-color: grey;'>" + 'You' + "</td>"
            }
            else if (treasureX == playerX && treasureY == playerY) {
                table += "<td style='background-color: gold;''>" + 'Win' + "</td>"
                logtreasure()
                treasurepic()
            }
            else if (enemyX == mapX && enemyY == mapY) {
                table += "<td style='background-color: red;''>" + 'Enemy' + "</td>"
            }
            else if (enemyX == playerX && enemyY == playerY) {
                table += "<td style='background-color: rgb(138, 32, 41)''>" + '-1 Treasure' + "</td>"
                logenemy()
                enemypic()
            }
            else {
                table += "<td style='background-color: chartreuse;''>" + mapY + ',' + mapX + "</td>"
            }
        }
        table += "</tr>"
    }
    table += "</table>"
    document.getElementById("tabell").innerHTML = table
    
}

function getrandomimage() {
    let randomindex = Math.floor(Math.random() * worldpictures.length)
    let randomimage = worldpictures[randomindex]
    let picture = "";
    picture += "<img class='worldimage' src='./worldimages/"
    picture +=  randomimage + "'>"
    document.getElementById('world').innerHTML = picture

        
}

function treasurepic() {
    let picture = "";
    picture += "<img class='item' src='styleimages/treasure.png'>"
    document.getElementById("enemy/treasure").innerHTML = picture
}

function enemypic() {
    let picture = "";
    picture += "<img class='item' src='styleimages/todd.png'>"
    document.getElementById("enemy/treasure").innerHTML = picture
}

function getjoke() {
    let div = ""

    div += "<div class='chucknorris'>"

    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
        .then(function (response) { return response.json() })
        .then(function (data) {
            document.getElementById("joke").innerHTML = data.value
        })
    div += "</div>"
}


function logtreasure() {
    let p = ""
    p += "<p class='log style='color: chartreuse;'>You found the treasure!</p>"
    document.getElementById("actionlog").innerHTML = p
    treasureX = Math.floor(Math.random() * 5) + 1;
    treasureY = Math.floor(Math.random() * 5) + 1;
}

function logenemy() {
    let p = ""
    p += "<p class='log'>You got chaught by Todd!</p>"
    document.getElementById("actionlog").innerHTML = p
}

function horizontalenemymovement() {
    let number = Math.floor(Math.random() * 100) + 1;
    if (number <= 60) {
        if (playerX > enemyX) {
            enemyX++
        }
        else if (playerX < enemyX) {
            enemyX--
        }
    }
    else {
        verticalenemymovement()
    }
}
function verticalenemymovement() {
    let number = Math.floor(Math.random() * 100) + 1;
    if (number <= 60) {
        if (playerY > enemyY) {
            enemyY++
        }
        else if (playerY < enemyY) {
            enemyY--
        }
    }
}

function rerolltreasure() {
    treasureX = Math.floor(Math.random() * 5) + 1;
    treasureY = Math.floor(Math.random() * 5) + 1;
}

function buttonforward() {
    if (playerY > 1) {
        playerY--;
        horizontalenemymovement()
        drawmap()
        getrandomimage()
    }
}
function buttonbackward() {
    if (playerY < 5) {
        playerY++;
        horizontalenemymovement()
        drawmap()
        getrandomimage()
    }
}
function buttonleft() {
    if (playerX > 1) {
        playerX--;
        horizontalenemymovement()
        drawmap()
        getrandomimage()
    }
}
function buttonright() {
    if (playerX < 5) {
        playerX++;
        horizontalenemymovement()
        drawmap()
        getrandomimage()
    }
}






