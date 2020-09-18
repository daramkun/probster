class Probability {

    prob = 0;
    value = null;
    
    /**
     * @param {Number} prob
     * @param {Object} value
     */
    constructor(prob, value) {
        this.prob = prob;
        this.value = value;
    }
}

/**
 * @param {Array<Probability>} probs
 * @return {Object}
 */
function get_probability_result(probs) {
    if(probs == null || probs.length == 0) {
        return null;
    } else if (probs.length == 1) {
        return probs[0].value;
    }
    
    let sum = 0;
    for(const prob of probs) {
        sum += prob.prob;
    }

    const rand = Math.round(Math.random() * sum);
    
    sum = 0;
    for(const prob of probs) {
        sum += prob.prob;
        if(sum >= rand) {
            return prob.value;
        }
    }
    return probs[probs.length - 1].value;
}

module.exports = {
    Probability: Probability,
    get_probability_result: get_probability_result
}