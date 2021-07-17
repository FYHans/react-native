// export function axios(url, params) {
//     return fetch(url, params)
//         .then(res => res.text())
//         .then(str => new Function('return (' + str + ')')())
// }

export function axios(url, params) {
    return fetch(url, params)
        // 解析成字符串
        .then(res => res.text())
        // 解析成对象
        .then(str => new Function('return (' + str + ')')())
}