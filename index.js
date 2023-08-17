let total = 0;
function  handleClikBtn(target){
    const selecteditmes = document.getElementById('selected-itmes');
const itemName = target.parentNode.childNodes[3].innerText;
const li = document.createElement("li");
li.innerText =itemName;
document.getElementById('selected-itmes').innerText;
selecteditmes.appendChild(li);
const parice = (target.parentNode.childNodes[7].innerText.split(" ")[1]);

total = parseInt(total) + parseInt (parice);

document.getElementById('total').innerText = total;
}