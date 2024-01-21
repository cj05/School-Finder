import xlsx from 'node-xlsx';

function Load(Path:string){
    const workSheetsFromFile = xlsx.parse(Path);
    //console.log(workSheetsFromFile)
    return workSheetsFromFile
}

export default {Load};