var winner = []
winner = JSON.parse(localStorage.getItem("winner"));
$(".victor").attr("src", winner[1])

$(".responseb").text(winner[0] + " wins!")