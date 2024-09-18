// document.getElementById("button-login").addEventListener("click", function(event){
//     event.preventDefault();


//     // get the phone number 
//     const phoneNumber = document.getElementById("phone-number").value ;
//     console.log(phoneNumber);

//     // get the pin number
//     const pinNumber = document.getElementById("pin-number").value ;
//     console.log(pinNumber);

//     //this is temporary, we will replace this with a call to the backend
//     if(phoneNumber == "5555" && pinNumber == "1234"){
//         console.log("You are logged in");
//     } else {
//         alert("Invalid phone number or pin number");
//     }
// })

document.getElementById("button-login")
    .addEventListener("click", function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);

    // Bad way to validate
    if(phoneNumber == "5555" && pinNumber == "1234"){
    console.log("you are logged in");
    window.location.href = "home.html";
    }
})