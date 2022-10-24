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
  console.info(`${formatLabel(how)}${destination}`)
}

export function buy(shoppingList) {
  const stuff = Array.isArray(shoppingList)
    ? shoppingList.join(', ')
    : shoppingList

  console.info(formatLabel('BUY') + stuff)
}

function formatLabel(label) {
  return `${label.toUpperCase()} `
}

export function daily(time, callback) {
  // time is not used, just call it right away
  callback()
}

export function on(event, callback) {
  // event is not used, just call it right away
  callback()
}

