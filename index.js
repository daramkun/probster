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
function get_custom_probability_result(probs) {
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

function get_equal_probability_result(arr) {
    if(arr == null || arr.length == 0) {
        return null;
    } else if(arr.length == 1) {
        return arr[0];
    }

    return arr[Math.round(Math.random() * (arr.length - 1))];
}

module.exports = {
    Probability: Probability,
    get_custom_probability_result: get_custom_probability_result,
    get_equal_probability_result: get_equal_probability_result,
}