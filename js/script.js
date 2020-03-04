function getPizzaType() {
    var selectedPizzaType = document.getElementById("type").value;
    return parseInt(selectedPizzaType);
}

function getSizeValue() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}

function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}

function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}

function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You have Orderd" + getQuantity() + " pizza(s)." + "" + " The Total Amount is " + (totalAmount) + "" + " Thank you!");
}