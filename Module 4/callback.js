function getData(callback){
    setTimeout(()=>{
        const data = "Rohan"
        callback(data)
    },3000)
}

function handleData(data){
   console.log(`Data received: ${data}`)
}

getData(handleData);
