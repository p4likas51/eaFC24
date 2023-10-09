function validateForm(){
    function animationTimeout(){
        document.getElementById("animation").style.display = 'none';
        document.getElementById("content").style.display = 'block';
    }
    let card_holder = document.forms["payment"]["name"].value;
    let number = document.forms["payment"]["number"].value;
    let cv = document.forms["payment"]["cv"].value;
    if (card_holder == "" || number == "" || cv == ""){
        alert("Fill all fields!");
        return false;
    }
    else if (isNaN(number) || isNaN(cv)){
        alert('Enter correct data');
        return false;
    }
    else if (number.length < 16 || number.length > 19){
        alert('Card number must be between 16 and 19 characters long')
        return false;
    }
    else if (cv.length != 3){
        alert('CV number must be 3 characters long')
        return false;
    }
    document.getElementById("payment").style.display = 'none';
    document.getElementById("animation").style.display = 'flex';
    document.getElementById("header").style.margin = '350px 0px'
    setTimeout(animationTimeout, 3800)
    return false;
}