// const getTodos = (resource) => {

//     console.log("out of promise")
//     const p = new Promise((resolve, reject) => {
//         console.log("inside promise")
//         const request = new XMLHttpRequest();

//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText)
//                 resolve(request.responseText)
//             } else if (request.readyState === 4) {
//                 reject("error getting resouce")
//             }
//         })

//         request.open('GET', resource);
//         request.send();
//     })
//     console.log("out of promise 2")
//     return p
// }

// getTodos("/todos/1.json").then(data => {
//     console.log("promise 1 resolved:", data)
//     return getTodos("/todos/2.json")
// }).then(data => {
//     console.log("promise 2 resolved:", data)
// }).catch(err => {
//     console.log("promise rejected:", err)
// })

// Promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         // reject('some error');
//     });
// }

// getSomething().then(
//     (data) => {
//         // this callback is called when promise resolve() was called
//         console.log(data)
//     },
//     (err) => {
//         // this callback is called when promise reject() was called
//         console.log(err)
//     }
// )

// getSomething()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })


// fetch api

// fetch('todos/1.json').then((response) => {
//     console.log('resolved: ', response)
//     return response.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected: ', err)
// })


// async & await

const getTodos = async (resource) => {
    const response = await fetch(resource)

    if (response.status !== 200) {
        throw new Error("cannot fetch the data")
    }

    const data = await response.json()
    return data
}

console.log(1)
console.log(2)
getTodos("todos/1s.json")
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message))
console.log(3)
console.log(4)