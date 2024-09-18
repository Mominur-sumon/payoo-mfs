// add money to the account

document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // get the amount to add
        const addMoneyInput = document.getElementById("input-add-money").value ;
        console.log(addMoneyInput);

        // get the pin number
        const pinNumber = document.getElementById("input-pin-number").value ;
        console.log(pinNumber);
        
})