# Show, don't tell 

## Introduction

This code is simulating a real-world scenario to go shopping to a specific shop, buying the things on your shopping list, and going home again.

This process is implemented (and orchestrated) by the `goShopping` function. It receives arguments so it knows what to do, starting with just which shop to go to, and the shopping list.

The app is not really doing anything, it just writes to the console which steps it is doing, for example:

```
WALK super market
BUY milk, eggs, flower
WALK home
```

The super market is close by, so you can just walk. But what if the shop is further away, or you need to get a lot of stuff, or the weather changes?

The implementation of the `goShopping` function will change to do the right thing, depending on these situations.

But does it change in a good way? How can we implement this in such a way the implementation is clear, maintainable, has the responsibilities at the right place, and ... ...

In the following video I will start building the `goShopping` funtion, implement all requirements, and tell you how I think it should NOT, but also of course how is SHOULD be implemented.

Topics such as single responsibility, conditionals, AHA programming, readability, maintainability, etc. will come along. I think I will learn a lot from this, and I hope you too!

Please let me know what you think of my implementation, explanation, and lessons learned. Do you agree, what are your thoughts? We all want to learn, right?

...link to video here...

## Usage

Run the code with `node index.js`.

Use `npm test` to run the tests in watch mode.

## Steps

1. Create the `goShopping(shop, shoppingList)` function, which does:

```
walkTo(shop)
buy(shoppingList)
walkTo(home)
```

2. If the `shoppingList` is long, go by car instead of walking.

3.

