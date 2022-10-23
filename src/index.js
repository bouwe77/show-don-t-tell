import { home, walkTo, driveTo, cycleTo, buy } from './stuff.js'

export function goShopping(shop, shoppingList) {
  walkTo(shop)

  buy(shoppingList)

  walkTo(home)
}

export default function start() {

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

