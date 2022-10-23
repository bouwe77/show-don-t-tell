export const home = 'home'

export function walkTo(destination) {
  travelTo('WALK', destination)
}

export function cycleTo(destination) {
  travelTo('CYCLE', destination)
}

export function driveTo(destination) {
  travelTo('DRIVE', destination)
}

function travelTo(how, destination) {
  console.log(`${formatLabel(how)}${destination}`)
}

export function buy(shoppingList) {
  const stuff = Array.isArray(shoppingList)
    ? shoppingList.join(', ')
    : shoppingList

  console.log(formatLabel('BUY') + stuff)
}

function formatLabel(label) {
  return `${label.toUpperCase()} `
}

