console.log(sessionStorage.getItem("name"))
document.getElementById("placeholder").innerHTML = "Thank you, " + sessionStorage.getItem("name") + "!"