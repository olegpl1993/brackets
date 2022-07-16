module.exports = function check(str, config) {
    let arr = str.split("");
    let flag = 0;
    for (; ;) {
        for (let i = 0; i < arr.length; i++) {
            for (let n = 0; n < config.length; n++) {
                if (arr[i] === config[n][0] && arr[i + 1] === config[n][1]) {
                    arr.splice(i, 2);
                }
                if (arr.length === 0) {
                    return true;
                }
            }
        }
        if (flag === arr.length) {
            return false;
        }
        flag = arr.length;
    }
}