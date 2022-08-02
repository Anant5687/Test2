//Find isomorphic strings

function makeObj(str) {
    let obj = {}

    for (let val of str) {
        if (!obj[val]) {
            obj[val] = 1
        } else {
            obj[val]++
        }
    }
    return obj
}

function findIsoMorphic(str1, str2) {
    let obj1 = new makeObj(str1)
    let obj2 = new makeObj(str2)
    let oneA = []
    let secA = []
    for (ch in obj1) {
        oneA.push(obj1[ch])
    }

    for (ch in obj2) {
        secA.push(obj2[ch])
    }


    function isEqual(a, b) {
        if (a.join() == b.join()) {
            return true
        } else {
            return false
        }
    }

    console.log(isEqual(oneA, secA))
}
findIsoMorphic("xyz", "aab")