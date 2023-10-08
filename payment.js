function validateForm(){
    function animationTimeout(){
        document.getElementById("animation").style.display = 'none';
        document.getElementById("content").style.display = 'block';
    }
    let card_holder = document.forms["payment"]["name"].value;
    let number = Number(document.forms["payment"]["number"].value);
    let cv = Number(document.forms["payment"]["cv"].value);
    if (card_holder == "" || number == "" || cv == ""){
        alert("Fill all fields!");
        return false;
    }
    document.getElementById("payment").style.display = 'none';
    document.getElementById("animation").style.display = 'flex';
    document.getElementById("header").style.margin = '350px 0px'
    setTimeout(animationTimeout, 3800)
    return false;
}