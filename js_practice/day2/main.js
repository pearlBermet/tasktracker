const url = "https://rickandmortyapi.com/api/character/363";

function sendData(method, url, body=null){
    return fetch(url,body).then((response) => {
        return response.json()
    }).then(console.log).catch((error)=>{
        console.log()
    })
}

sendData('GET',url);
