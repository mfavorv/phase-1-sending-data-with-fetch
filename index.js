// Add your code here

function submitData(name, email){
 return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body:JSON.stringify({
          name : "Steve",
          email: "steve@steve.com"
        })   
    })
    .then((response) => response.json())
    .then(data => {
        const newId = data.id;
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement)})
    .catch(error => {
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    })
}

submitData(name, email)