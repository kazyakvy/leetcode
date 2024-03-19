/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {};
    
    for (let i = 0; i < tasks.length; i++) {
        const value = map[tasks[i]];
        map[tasks[i]] = value ? value + 1 : 1;
    }
    
    const waitMap = {};
    let result = 0;
    
    while (true) {
        const keys = Object.keys(map);
        if (!keys.length) {
            break;
        }
        let maxCountKey;
        for (let key of keys) {
            if (!waitMap[key]) {
                if (!maxCountKey) {
                    maxCountKey = key;
                    continue;
                }
                maxCountKey = map[key] > map[maxCountKey] ? key : maxCountKey;
            }
        }
        result++;
        for (let key in waitMap) {
            waitMap[key]--;
            if (!waitMap[key]) {
                delete waitMap[key];
            }
        }
        
        if (maxCountKey) {
            map[maxCountKey]--;
            if (!map[maxCountKey]) {
                delete map[maxCountKey];
            }
            waitMap[maxCountKey] = n;
        }
    }
    
    return result;
};