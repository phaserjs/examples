const flatten = (obj, result = []) => {
    // Clone obj
    const objCloned = Object.assign({}, obj);
    if (!objCloned.children) {
        result.push(objCloned);
    } else {
        for (let child of objCloned.children) {
            flatten(child, result);
        }
        delete objCloned.children;
        result.push(objCloned);
    }
    return result;
}

module.exports = flatten;
