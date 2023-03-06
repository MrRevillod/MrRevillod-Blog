export const calcPages = (data, numPerPage) => {

    let maxPages = Math.trunc(data.length / numPerPage)
    let rest = data.length % numPerPage

    rest > 0 ? maxPages += 1 : maxPages

    return maxPages
}

export const getPaginatedData = (data, page, numPerPage) =>
    data.slice((page - 1) * numPerPage, (page - 1) * numPerPage + numPerPage)