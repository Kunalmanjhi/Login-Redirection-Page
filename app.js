function func(){
    var email = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    if(email == 'kunalkm8586@gmail.com' && pass == '123456'){
        window.location.assign("Branch.html")
        alert("Success full !")
    }
    else{
        alert("Wrong Password Try again");
        return;
    }
}