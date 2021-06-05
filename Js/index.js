const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector(".a-btn");
const color = document.querySelector(".a-color");
const btnStart = document.querySelector(".a-btn-1");

btnStart.style.visibility  = "hidden";


var slider = document.getElementById("speedChange");
var myColor = setInterval(changeColor, slider.value);
var demoo = document.getElementById("demo");

demoo.innerHTML = slider.value;
// update value of slider
 slider.oninput = function() {
   demoo.innerHTML = this.value;
  } 

// alert("range.value is " + slider);
button.addEventListener("click", function(){
    myColor = clearInterval(myColor);
    btnStart.style.visibility  = "visible";
});

btnStart.addEventListener("click", function(){
    myColor = setInterval(changeColor, slider.value);
});



slider.addEventListener("click", function(){
    myColor = clearInterval(myColor);
    myColor = setInterval(changeColor, slider.value);
});


function changeColor() {
        let hexColor = "#" //for first of each hes color

        for (let index = 0; index < 6; index++) {
            hexColor += hex[randNum()];    
        }
        color.innerHTML = hexColor;
        document.body.style.backgroundColor = hexColor;
}    


function randNum() {
    return Math.floor(Math.random() * hex.length);
}

//copy to clipbord
function copyToClipboard(element) {
    let colorName = $(".a-color");
    var temp = $("<input>");
    $("body").append(temp);
    temp.val($(element).text()).select();
    document.execCommand("copy");
    temp.remove();
    myColor = clearInterval(myColor);
    btnStart.style.visibility  = "visible";
    swal("Color Copied to Clipboard successfully.", "Your color is :" + colorName.text(), "success");
    
  }
  
  