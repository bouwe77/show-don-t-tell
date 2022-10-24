import { goShopping } from '../src/index.js'
import { jest } from '@jest/globals'

// Do not log to the console, instead mock it, so we can inspect it.
const consoleInfo = jest.spyOn(console, 'info').mockImplementation((logMessage) => {
  //console.log(logMessage)
})

// Assert (inspect) the given logMessage was sent to the console.
// Optionally send nthCall to check whether it was the 1st, 2nd, etc. call.
const assert = (logMessage, nthCall) => {
  if (nthCall) return expect(consoleInfo).nthCalledWith(nthCall, logMessage)
  return expect(consoleInfo).toBeCalledWith(logMessage)
}

beforeEach(() => {
  jest.clearAllMocks()
})

test('1 article at the super market: Walk', () => {
  goShopping('super market', 'bread')

  assert('WALK super market')
  assert('BUY bread')
  assert('WALK home')
});

test('One article: Buy 1 article comma separated', () => {
  goShopping('whatever', ['bread','butter'])

  assert('BUY bread, butter')
});

test('Multiple articles: Buy articles comma separated', () => {
  goShopping('whatever', ['bread','butter'])

  assert('BUY bread, butter')
});

test('Any shop except the super market: Drive by car', () => {
  goShopping('whatever', 'whatever')

  assert('DRIVE whatever')
  assert('DRIVE home')
});
