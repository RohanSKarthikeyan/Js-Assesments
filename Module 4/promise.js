const arr = [101,102,103]
const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const id = 104
        let flag = 1;
        for(let num of arr){
            if(num == id){
                flag = 1;
                resolve(id)
                break
            }else{
                flag = 0;
            }
        }
        if(flag === 0){
            reject(new Error('Id not found'))
        }
    },3000)
});

data.then((id)=>{
    console.log(`ID is: ${id}`)
}).catch((err)=>{
    console.log(err)
}).finally("test done")