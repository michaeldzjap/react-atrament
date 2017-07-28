/**
 * Call a function with the given arguments if it is defined.
 *
 * @param Function fn
 * @param mixed args
 * @return mixed
 */
export const callIfDefined = (fn, args) => {
    if (fn && typeof fn === 'function') {
        return fn(args);
    }
};
