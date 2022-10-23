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

1. If the `shoppingList` is long, go by car instead of walking.

1. The super market is 50m away, so let's walk there always.

1. Let's do some more physical exercise, let's also add cycling. So let's add the distance and decide on that.

1. The weather also a factor to decide what to do: If the weather is bad, go by car.

1. What if we have a massive shopping list, let's go multiple times: _Recursion..._

1. But what if we go that super fancy clothing shop 100km away, and have a massive list? Let's not drive there more than once...

1. Let's also support going to multiple shops in one go, so the `shop` + `shoppingList` combination should become an object and then we could pass in an array of objects.

1. The problem we are having now is that the calling code has an easy job, it just says _what_ it wants, and `goShopping` has a really tough job of figuring out _how_ the hell to do that...

1. The problem with that is `goShopping` is a black box (not necessarily a bad thing), but it's massive and complex. To figure out how it works you have to look into the function, because you can't see what happens from the calling code.

1. This is wrong, it sould be the other way around: `goShipping` should _orchestrate_ the _what_, and the calling code should tell the _how_

1. This way, I went from imperative (conditionals in `goShopping`) to declarative (hardly any conditionals at all anywhere, almost only _what_'s everywhere)

1. Wat kun je hier nou mee in je eigen codebase?

a. Heb je functions met veel conditionals?
  
b. Moet je in de functie gaan om te kijken _hoe_ hij dingen doet?

c. Kun je 'm aanroepen omdat je weet wat hij doet?

d. ...

e. ...

---

Random ideas

- In de functie eerst een `if ('super market') walkTo` en de rest `driveTo` doen?
- Recursief maken om meerdere keren naar de winkel te gaan?
- Weather `{ temperature: 21, type: 'rainy' }`
- Weather `type` is something like `'sunny'`, '`cloudy'`, `'rainy'`, `'awful'`
- Elke keer als er een winkel bijkomt moet ik de implementatie aanpassen...
- Samenvatting Kent / Sandi?
- Omdat ik steeds meer argumenten/logica toevoeg, moet ik steeds de tests aanpassen, uitbreiden, en eigenlijk zelfs misschien wel onnodige/onrealisische situaties.
- Ik test meer dan ik daadwerkelijk nodig ben. Ik moet gewoon de daadwerkelijk use case(s) testen en de `goShopping` als implementatiedetail beschouwen.
- If I only test my use cases, and things change, I only need to change that use case, and not the `goShopping` implementation detail.
- Verschillende processen, zodat ik die (later) kan testen?
- `goShopping` bepaalt het hoe HOE in alle situaties, waarmee het een onduidelijke black box wordt.
- `goShopping` zou terug kunnen geven wat NIET gehaald is in de winkel, zodat de aanroepende code kan bepalen wat ermee moet gebeuren.
- During the video, keep a list of bullet points of the things I've learned/improved in the implementation, do's and don'ts.
- Als ik iets mee moet geven waaruit iemand anders moet opmaken hoe dat dan gedaan moet worden, kan ik dan niet beter meteen meegeven hoe hij het moet doen?
- 