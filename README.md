## Ten Minute Walk

A short project focussed on practicing TDD process.

### Take a Tem Minute Walk
Create a function that will return true if the walk will take you exactly ten minutes and will return you to your starting point.

### Requirements
You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.
The city provides its tourists with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk. eg. ['n', 's', 'w', 'e']

You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

### Acceptance Criteria
```
ten_minute_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true
ten_minute_walk?(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false
ten_minute_walk?(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false
ten_minute_walk?(['w', 's']) # => false
```

1. What input cases can I get in the string?
2. What is the simplest example of each of these?
3. Is one of these simpler than the others for some reason?
4. And then when you are coding, what assumptions is my code making? (And then
writing a test to break that assumption).

Cases
- Length
- Equal number of E & W && equal number of N & S

If/else > evaluate array length
Iterate through array and see if there are an equal number of n&s
Iterate through and see if there are an equal number of e&w



| INPUT | OUTPUT |
|-------|--------|
|['w', 'e'] | false |
|['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'] | true |
|['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w', 'w'] | false |
|['w', 'w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e'] | false |
|['n', 'n', 'n', 'n', 'n', 'n', 's', 's', 's', 's'] | false |




Thanks so much, I'll give it a read. I watched a great video yesterday that really explained what is was in the most simple way. 
