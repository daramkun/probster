# Probster🦞
Get Random Value with Probability settings

# Usage
1. Install npm package
```
npm install probster
```

2. require from javascript source file
```
const Probster = require('probster');
```

3. Custom Probability?
```
const probs = [
    Probster.Probability(10, 'Ten percent probability'),
    Probster.Probability(20, 'Twenty percent probability'),
    Probster.Probability(30, 'Thirty percent probability'),
    Probster.Probability(40, 'Fourty percent probability'),
];
console.log(Probster.get_custom_probability_result(probs));
```

4. Equal Probability?
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Probster.get_equal_probability_result(arr));
```