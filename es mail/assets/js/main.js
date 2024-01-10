const emailHtml = document.getElementById("email")
// const userEmail = window.alert("Please enter your email")


//creating an array of emails   
const emailList = [ "vladimir.ivanov@secretbaseunderthesea.com", "sasha.kozlov@secretbaseunderthesea.com", "sergei.sokolov@secretbaseunderthesea.com", "lukyan.goluvbev@secretbaseunderthesea.com", "misha.vasyliev@secretbaseunderthesea.com" ]

for (let i = 0; i < emailList.length; i++){
    console.log(emailList[i])
}

// creating an event listener on click and subsequent function

document.querySelector('form').addEventListener('submit', function (e) {
    // getting email const from input and making it into value
    const enteredEmail = emailHtml.value

    //this prevents the page from reloading after pressing the button
    e.preventDefault()

    // function that checks if the entered email is in the email list
    if (emailList.includes(enteredEmail)) {
        resultMessage.innerHTML = "<p class='text-light bg-success'>You are part of the crew!</p>"
    } else {
        resultMessage.innerHTML = "<p class='text-light bg-danger'>You are not part of the crew!</p>"
    }
    
});