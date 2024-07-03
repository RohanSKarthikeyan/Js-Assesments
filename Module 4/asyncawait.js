// //callback

// function getData(callback){
//     setTimeout(()=>{
//         const data = "Rohan"
//         callback(data)
//     },3000)
// }

// function handleData(data){
//    console.log(`Data received: ${data}`)
// }

// getData(handleData);


// //promises

// const arr = [101,102,103]
// const data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const id = 104
//         let flag = 1;
//         for(let num of arr){
//             if(num == id){
//                 flag = 1;
//                 resolve(id)
//                 break
//             }else{
//                 flag = 0;
//             }
//         }
//         if(flag === 0){
//             reject(new Error('Id not found'))
//         }
//     },3000)
// });

// data.then((id)=>{
//     console.log(`ID is: ${id}`)
// }).catch((err)=>{
//     console.log(err)
// }).finally("test done")

const arr = [101,102,103]
const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const id = 102
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

const users = [
    user1 ={
        name: "rohan",
        id: 101
    },
    user2 = {
        name: "karthikeyan",
        id: 102
    },
    user3 = {
        name: "rohith",
        id: 103
    }
]

function getUserName(id){
    const nameProm = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = 1;
            for(let user of users){
                if(user.id === id){
                    flag = 1;
                    resolve(user.name);
                    break;
                }else{
                    flag = 0;
                }
            }
            if(flag === 0){
                reject(new Error('User Not Found'))
            }
        })
    })
    return nameProm
}

async function asyncAwaitEg(){
    try{
        const id = await data
        const userName = await getUserName(id)
        console.log(userName);
    }catch(err){
        console.log(err)
    }finally{
        console.log("Finally")
    }
}

asyncAwaitEg();