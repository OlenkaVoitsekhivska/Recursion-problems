// const user = {
//     id: 101,
//     email: 'jack@dev.com',
//     personalInfo: {
//         name: 'Jack',
//         address: {
//             line1: 'westwish st',
//             line2: 'washmasher',
//             city: 'wallas',
//             state: 'WX'
//         }
//     }
// }



// function factorial(obj) {
//     const container = [];
//     let arryKeys = Object.entries(obj);


//     arryKeys.map(key => {
//         container.push(key[0]);

//         if (typeof key[1] === "object") {
//             factorial(key[1]).flatMap(el => {
//                 container.push(el);
//             })
//             }
           
//         })

//     return container;
//     }

// console.log(factorial(user))

const obj1 = {
    name: {
        first: "Vanya",
        second: "Petrov",
    },
    address: "Vinnytsia",
}
const obj2 = {
    name: {
        first: "Vanya",
        nee: "Petrov",
    },
    address: "Vinnytsia",
}

function recursion(obj1, obj2) {
    const emptyArry = [];
    Object.keys(obj1).map(key => {
        if (typeof obj1[key] !== 'object') {
            if (obj1[key] === obj2[key]) {
            emptyArry.push('true');
            } else {
                emptyArry.push('false');
        }
        }

        else {
          emptyArry.push(recursion(obj1[key], obj2[key])) ;
        }
    })

    let [result] = emptyArry.flatMap(el => el)
    return result;

}




let obj = {here: {is: "an"}, object: 2};

console.log(recursion(obj, { here: 1, object: 2 }));
console.log(recursion(obj, obj));