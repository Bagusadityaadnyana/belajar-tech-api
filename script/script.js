// mengambil id dengan nama fullname
const fullname = document.getElementById("fullname");
const alamat = document.getElementById("alamat");


console.log(fullname, " : fullname");
console.log(alamat, " : alamat");


const BASE_URL = "https://jsonplaceholder.typicode.com/users/4";

async function getDataUsers(){
    try {
       const response = await fetch(BASE_URL); 
       const data = await response.json();

        // menampilkan nama
       fullname.innerText = data.name;
       
        // menampikan alamat
       alamat.innerText = data.address.street; 

      console.log("INI DATANYA : ", {data}); 
    } catch (error) {
      console.error("INI ERROR : ", {error}); 
    }
}

getDataUsers();