function login(){
    pas = document.getElementById("pas").value;
    console.log(pas);
    if(pas== "test"){
        window.location ="index.html";
    }
    setCookie("pass",pas,1);
} 
function setCookie(cname, cvalue, exdays) {
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
md5(23453);