import { home, walkTo, driveTo, cycleTo, buy,on,daily } from './stuff.js'

export function goShopping(shop, shoppingList) {

  let travelTo = walkTo
  if (shop !=='super market') travelTo = driveTo

  travelTo(shop)
  
  buy(shoppingList)

  travelTo(home)
}

export default function start() {
  // separate functions, and not inline,
  // so that I can bring this functions to a separate module,
  // so they can be imported in a test as well...
  function buyDinnerAtSuperMarket() {
    // call goShopping here...
  }

  function buyFinishedStockAtSuperMarket() {
    // call goShopping here...
  }

  daily('17:00', buyDinnerAtSuperMarket)
  on('out of stock', buyFinishedStockAtSuperMarket)
}

