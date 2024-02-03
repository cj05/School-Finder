class PDP{
    UniSort(modelOutput:Array<number>[],uniArr:Array<string>){
        //console.log(scoringArr)
        const scoringArr = modelOutput[0]
        const confidentArr = modelOutput[1]
        const items:(number|string)[][] = [[]]
        for(var i = 0;i < scoringArr.length;i++){
            items[i] = [scoringArr[i],confidentArr[i],uniArr[i]]
        }
        //console.log(items)
        //items = list(dict.items())
        items.sort((x, y)=> (Number(y[0])-Number(y[1])) - (Number(x[0])-Number(x[1])))
        //console.log(items)
        return items
    }
}
export default new PDP