import { goShopping } from '../src/index.js'
import { jest } from '@jest/globals'

// Do not log to the console, instead mock it, so we can inspect it.
const consoleLog = jest.spyOn(console, 'log').mockImplementation((logMessage) => {
  // console.info(logMessage)
})

// Assert (inspect) the given logMessage was sent to the console.
const assert = (logMessage) => expect(consoleLog).toBeCalledWith(logMessage)

beforeEach(() => {
  jest.clearAllMocks()
})

test('1 article at the super market', () => {
  goShopping('super market', 'bread')

  assert('WALK super market')
  assert('BUY bread')
  assert('WALK home')
});


test('multiple articles at the super market', () => {
  goShopping('super market', ['bread','eggs','sugar'])

  assert('WALK super market')
  assert('BUY bread, eggs, sugar')
  assert('WALK home')
});
