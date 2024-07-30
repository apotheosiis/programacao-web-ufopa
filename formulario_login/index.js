//let correct_name = "admin";
//let corret_passwd = "admin";

function login(){
    var name = document.getElementById('name');
    var passwd = document.getElementById('passwd');

    if(name.value=="admin" && passwd.value=="admin") {
        alert("Successfully Login");
        location.href = "home.html";
    } else {
        alert("Incorrect Login, Try Again :)");
    }
    
    name.value = "";
    passwd.value = "";
}

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const btn = document.getElementById("send");

        btn.click();
    }
});
