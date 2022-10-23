import { home, walkTo, buy } from './stuff.js'

goShopping('record store', 'Arab Strap LP from 2021')

function goShopping(shop, shoppingList) {
  walkTo(shop)

  buy(shoppingList)

  walkTo(home)

  console.log('\n')
}

// Every end of the day we go to the super market to buy stuff for dinner.
// When we are out of stock for other things, we buy that too of course.
goShopping('super market', ['macaroni', 'vegetables', 'beer', 'toilet paper'])
goShopping('super market', ['frozen pizza'])
goShopping('super market', ['potatoes', 'broccoli', 'sausages', 'salt', 'bread'])

// We also need to buy other things of course:
goShopping('record store', ['Sun Kil Moon - Benji', 'Jack White - Fear Of The Dawn', 'The Low Anthem - Smart Flesh'])
goShopping('H&M', ['trousers'])
