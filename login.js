function addUser() {
    player1name = document.getElementById("name1").value
    player2name = document.getElementById("name2").value
    localStorage.setItem("name1",player1name)
    localStorage.setItem("name2",player2name)
    window.location = "game_page.html"
}
