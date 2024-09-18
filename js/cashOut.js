
document.getElementById("btn-cash-out")
.addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value ;
    const pinNumber = document.getElementById("input-cash-out-pin").value ;
    
    if(pinNumber === '1234'){
        console.log("Cash out successful");
        const balance = document.getElementById("current-balance").innerText;
        const newBalance = parseInt(balance) - parseInt(cashOut);
        document.getElementById("current-balance").innerText = newBalance;
    }
})