function buttonPress() {
    let isValid = true;
    let FirstName = document.getElementById('FirstName').value;
    let Email = document.getElementById('Email').value;
    

    if (FirstName === "" || Email === "") {
        isValid = false;
        alert("Ensure all fields are filled!");
    }

    let re = /^[a-zA-Z]{1,32}$/;
    if (re.test(FirstName) === false) {
        isValid = false;
        alert("Invalid name!");
        console.log("false names");
    }

    let reemail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (reemail.test(Email) === false) {
        isValid = false;
        alert("Invalid email!");
        console.log("false email");
    }
if(isValid === true){
    
    const url = "http://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist";
    const data = {
        "name": FirstName,
        "email": Email
    }

    fetch(url, {
        method: "post",
        headers: {
            "Content-Tyoe": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if(response.status === 201){
            return response.json();
        }else if(response.status === 400){
            throw "Bad data was sent to the server";
        }else{
            throw "something went wrong";
        }
    })
    .then((resJson) => {
        alert(resJson["name"] + " has been added");
    })
    .catch((error) =>{
        alert(error);
    })
}
}