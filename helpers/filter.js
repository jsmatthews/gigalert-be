const filter = (array, paramsObj) => {
    if(Object.keys(paramsObj).length === 0 && typeof paramsObj === 'object') return array

    return Object.keys(paramsObj).reduce((filteredArr, param) => {
        return (filteredArr.length === 0)
            ? array.filter(el => el[param] === paramsObj[param])
            : filteredArr.filter(el => el[param] === paramsObj[param])
    }, []);
}

module.exports = { filter }