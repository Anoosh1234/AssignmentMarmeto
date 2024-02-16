let count = 0;

function increaseValue() {
    count++;
    updateCount();
}

function decreaseValue() {
    if (count > 0) {
        count--;
        updateCount();
    }
}

function updateCount() {
    document.getElementById("count").textContent = count;
}



var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

smallImg[4].onclick = function(){
    productImg.src = smallImg[4].src;
}
