class PDP{
    UniSort(scoringArr:Array<number>,uniArr:Array<string>){
        console.log(scoringArr)
        const items:(number|string)[][] = [[]]
        for(var i = 0;i < scoringArr.length;i++){
            items[i] = [scoringArr[i],uniArr[i]]
        }
        console.log(items)
        //items = list(dict.items())
        items.sort((x, y)=> Number(y[0]) - Number(x[0]))
        console.log(items)
        return items
    }
}
export default new PDP