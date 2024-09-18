document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        // get the amount to add
        const addMoneyInput = document.getElementById("input-add-money").value ;

        // get the pin number
        const pinNumber = document.getElementById("input-pin-number").value ;

        // this is temporary, we will replace this with a call to the backend
        if(pinNumber==='1234'){
            console.log("Money added successfully");
            
            // get the current balance
            const balance = document.getElementById("current-balance").innerText;
            const newBalance = parseInt(balance) + parseInt(addMoneyInput);
            document.getElementById("current-balance").innerText = newBalance;

        } else {
            alert("Invalid pin number");
        }
})