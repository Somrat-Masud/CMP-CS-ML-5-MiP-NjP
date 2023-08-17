let total = 0;
function  handleClickBtn(target){
    const selectedItem = document.getElementById('selected-item');
const itemName = target.parentNode.childNodes[3].innerText;
const li = document.createElement("li");
li.innerText =itemName;
document.getElementById('selected-item').innerText;
selectedItem.appendChild(li);
const Price = (target.parentNode.childNodes[7].innerText.split(" ")[1]);

total = parseInt(total) + parseInt (Price);

document.getElementById('total').innerText = total;
}