checkCookies();
function checkCookies(){
    var cookie = getCookie("pass");
    console.log(cookie);
    if(cookie!="test"){
        window.location = "verification.html";
    }

}
function setCookie(cname, cvalue, exdays) {
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function login(){
    pas = document.getElementById("pas").value;
    console.log(pas);
    if(pas== "test"){
        window.location ="index.html";
    }
    setCookie("pass",pas);
}