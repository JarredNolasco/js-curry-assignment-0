'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let bill = []
      bill.length = count
      bill.fill(itemName)
      return bill
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
listings =>
  customers => {
    let allCarts = []
    let customer = ''

    customers.reduce((result,customers) => {
      let items = []
       customer = customers.name
       let test = entries(customers.shoppingList)

      test.reduce((result, test) => {
         items.push(itemRepeater(test[0])(test[1]));

       }, [])
      
      let indivCarts = {customer,items}
      allCarts.push(indivCarts)

      },[])
    return allCarts
  }

module.exports = {
  listing,
  customer,
  constructCarts
}
