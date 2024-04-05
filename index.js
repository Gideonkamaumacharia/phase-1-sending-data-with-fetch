// Add your code here
const obj = {
    name: "Steve",
    email: "steve@steve.com",
}

const configurationObj = {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(obj)

    }
    


function submitData(name, email){

    return fetch("http://localhost:3000/users", configurationObj)
           
            .then((response) => response.json())
            .then((user) => {
        
              const idNum = document.createElement("p");
              idNum.innerHTML = user.id;
        
              document.body.appendChild(idNum);
            })
            .catch((error) => {
                const errorMessage = document.createElement("p");
                errorMessage.innerHTML = error.message;
          
                document.body.appendChild(errorMessage);
              });
    }


(submitData())
