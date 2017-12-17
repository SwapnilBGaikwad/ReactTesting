export const CHECK_IS_PRIME = 'CHECK_IS_PRIME';

export function isPrimeAction(value) {
    return {type: CHECK_IS_PRIME, value}
}

export const UPDATE_NUMBER = 'UPDATE_NUMBER';

function updateNumber(value) {
    return {type: UPDATE_NUMBER, value}
}

export function onPChange(no) {
    return updateNumber({p: {value: parseInt(no, 10)}})
}

export function onQChange(no) {
    return updateNumber({q: {value: parseInt(no, 10)}})
}

export function checkValidity() {
    return {type: CHECK_IS_PRIME}
}