var player1score = 0
var player2score = 0
var word, answer
var qTurn = "player1"
var aTurn = "player2"
document.getElementById("player1score").innerHTML = player1score
document.getElementById("player2score").innerHTML = player2score
var name1 = localStorage.getItem("name1")
var name2 = localStorage.getItem("name2")
document.getElementById("player1").innerHTML = name1
document.getElementById("player2").innerHTML = name2
document.getElementById("question").innerHTML = "Question Turn : " + name1
document.getElementById("answer").innerHTML = "Answer Turn : " + name2

function send() {
    var getWord = document.getElementById("word").value
    word = getWord.toLowerCase()
    char1 = word.charAt(1)
    char2 = word.charAt(Math.floor(word.length / 2))
    char3 = word.charAt(word.length - 1)
    removeChar1 = word.replace(char1, "_")
    removeChar2 = removeChar1.replace(char2, "_")
    removeChar3 = removeChar2.replace(char3, "_")
    console.log(removeChar3)
    var question = "<h4>" + removeChar3 + "</h4>"
    var textBox = "<input id = 'answer' type = 'text'></input>"
    var button = "<button class = 'btn btn-primary' onclick = 'check()'>CHECK</button>"
    var output = question + textBox + button
    document.getElementById("output").innerHTML = output
}

function check() {
    var getAnswer = document.getElementById("answer").value
    answer = getAnswer.toLowerCase()
    if (answer == word) {
        console.log("yes")
        if (aTurn == "player1") {
            player1score = player1score + 1
            document.getElementById("player1score").innerHTML = player1score
        }
        else if (aTurn =="player2")
            player2score = player2score + 1
        document.getElementById("player2score").innerHTML = player2score
    }
    if (qTurn == "player1") {
        qTurn = "player2"
        aTurn = "player1"
        document.getElementById("question").innerHTML = "Question Turn : " + name2
        document.getElementById("answer").innerHTML = "Answer Turn : " + name1
    }
    else if(qTurn=="player2"){
        qTurn = "player1"
        aTurn = "player2"
        document.getElementById("question").innerHTML = "Question Turn : " + name1
        document.getElementById("answer").innerHTML = "Answer Turn : " + name2
    }
}