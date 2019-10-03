function Sum() {

    var itemPrice, itemNumber;
    
    itemPrice = document.getElementById('IP').value;
    itemNumber = document.getElementById('IN').value;
    
    console.log( Number(itemNumber) * Number(itemPrice));
}