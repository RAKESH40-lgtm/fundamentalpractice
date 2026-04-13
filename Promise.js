const cartProducts = ["newProd", "prod1"]
// const cartProducts = []

//consume promise , in each chain there should be return  for flow 

const createOrdeer = orderCreated(cartProducts)
// console.log(createOrdeer)
createOrdeer.then((data) => {
    return data
})
    .then((orderId) => {
        return paymentInfor(orderId)
    })
    .then((payId) => {
        return orderSummary(payId)
    }).then((details) => {
        console.log(details)
    })
    .catch((err) => {
        console.log(err)
    })

//produce promise for creating order  

function orderCreated(cartProducts) {
    const promisecreated = new Promise(function (resolve, reject) {
        if (cartProducts.length === 0) {
            const err = new Error("Empty cart")
            reject(err)
        }
        resolve("12345")
    })
    return promisecreated
}

// produce promise for paymentInfor
function paymentInfor(id) {
    return new Promise(function (resolve, rej) {
        resolve(`payment:${id}`)
    })
}

// produce promise for orderSummary

function orderSummary(id) {
    return new Promise((my, rej) => {
        my("Completed here details " + "-" + id
        )
    })
}