// let content = document.getElementById("button").onclick = function(){
//     document.getElementById("content").style.display = 'block';
// }

let count = 0;
let dropdown = document.getElementById("dropdown_button").onclick = function(){
    count += 1
    if (count % 2 == 0){
        document.getElementById("dropdown_content").style.display = 'none';
    }
    else{
        document.getElementById("dropdown_content").style.display = 'block';
    }
}
