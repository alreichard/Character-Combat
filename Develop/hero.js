var winner = []
winner = JSON.parse(localStorage.getItem("winner"));
$(".victor").attr("src", winner[1])
console.log(winner[0])

