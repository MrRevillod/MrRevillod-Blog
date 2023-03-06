export const calcPages = (data, numPerPage) => {

    let maxPages = Math.trunc(data.length / numPerPage)
    let rest = data.length % numPerPage

    rest > 0 ? maxPages += 1 : maxPages

    return maxPages
}