class PDP {
    UniSort(ModelOutput, uniArr) {
        const scoringArr = ModelOutput[0]
        const confidentArr = ModelOutput[1]
        //console.log(scoringArr);
        const items = [[]];
        for (var i = 0; i < scoringArr.length; i++) {
            items[i] = [scoringArr[i], uniArr[i],confidentArr[i]];
        }
        //console.log(items);
        //items = list(dict.items())
        items.sort((x, y, z) => Number(y[0]) - Number(x[0]));
        //console.log(items);
        return items;
    }
}
export default new PDP;
