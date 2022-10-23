export const home = 'home'

export function walkTo(destination) {
  console.log('[WALK TO] ' + destination)
}

export function buy(shoppingList) {
  const stuff = Array.isArray(shoppingList)
    ? shoppingList.join(', ')
    : shoppingList

  console.log('[BUY] ' + stuff)
}

