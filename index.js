import { home, walkTo, buy } from './stuff.js'

goShopping('record store', 'Arab Strap LP from 2021')

function goShopping(shop, shoppingList) {
  walkTo(shop)

  buy(shoppingList)

  walkTo(home)

  console.log('\n')
}

// Next iterations:
// - Pass a "weather" argument (or a boolean whether weather influences?) to decide whether to walk or take the car.
// - Pass a distance argument to decide to take the bike for medium distances
//   and nice weather.
// - Pass multiple shops to go to when an article is not available.
// - Pass multiple shops, each with their own list, and go home when visited all shops.
// - When visiting more than x shops, or when the list is bigger than y, go by car regardless.

// Call the function from 3 processes:
// 1. A daily super market process
// 2. As soon as the supply is finished
// 3. As soon as someone indicates they will be visiting


// Every end of the day we go to the super market to buy stuff for dinner.
// When we are out of stock for other things, we buy that too of course.
goShopping('super market', ['macaroni', 'vegetables', 'beer', 'toilet paper'])
goShopping('super market', ['frozen pizza'])
goShopping('super market', ['potatoes', 'broccoli', 'sausages', 'salt', 'bread'])

// We also need to buy other things of course:
goShopping('record store', ['Sun Kil Moon - Benji', 'Jack White - Fear Of The Dawn', 'The Low Anthem - Smart Flesh'])
goShopping('H&M', ['trousers'])
