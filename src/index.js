import { home, walkTo, driveTo, cycleTo, buy,on,daily } from './stuff.js'

export function goShopping(shop, shoppingList) {

  let travelTo = walkTo
if (shop !=='super market')  travelTo =driveTo

  travelTo(shop)
  
  buy(shoppingList)

  travelTo(home)
}

export default function start() {

function buyDinnerAtSuperMarket() {
  //...
}

  daily('17:00', buyDinnerAtSuperMarket)

  function buyFinishedStockAtSuperMarket() {
    //...
  }

  on('out of stock', buyFinishedStockAtSuperMarket)

  
  // Every end of the day we go to the super market to buy stuff for dinner.
  // When we are out of stock for other things, we buy that too of course.
  goShopping('super market', ['macaroni', 'vegetables', 'beer', 'toilet paper'])
  goShopping('super market', ['frozen pizza'])
  goShopping('super market', ['potatoes', 'broccoli', 'sausages', 'salt', 'bread'])

  // We also need to buy other things of course:
  goShopping('record store', ['Sun Kil Moon - Benji', 'Jack White - Fear Of The Dawn', 'The Low Anthem - Smart Flesh'])
  goShopping('DIY shop', ['batteries', 'light bulb'])
  goShopping('H&M', ['trousers'])
}

