const LOOP_COUNT = 10000;
const Probster = require('./index.js');

const preinit_probs = [
    new Probster.Probability(10, 0),
    new Probster.Probability(10, 1),
    new Probster.Probability(20, 2),
    new Probster.Probability(30, 3),
    new Probster.Probability(30, 4),
];

var results = [
    0, 0, 0, 0, 0
];
for(let i = 0; i < LOOP_COUNT; ++i) {
    const result = Probster.get_custom_probability_result(preinit_probs);
    ++results[result];
}

for(let i = 0; i < results.length; ++i) {
    results[i] = results[i] / Number(LOOP_COUNT) * 100;
    console.log(`${i + 1}번 확률: ${preinit_probs[i].prob}, 실제 결과: ${results[i]}`);
}