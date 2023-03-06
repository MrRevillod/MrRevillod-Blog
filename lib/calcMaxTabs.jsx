export const calcMaxOfTabs = (data, numPerPage) => {

    let maxOfTabs = Math.trunc(data.length / numPerPage)
    let rest = data.length % numPerPage

    rest > 0 ? maxOfTabs += 1 : maxOfTabs

    return maxOfTabs
}