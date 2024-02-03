import xlsx from 'node-xlsx';
//import cliProgress from 'cli-progress';
// create a new progress bar instance and use shades_classic theme
function Load(Path) {
    const workSheetsFromFile = xlsx.parse(Path);
    //console.log(workSheetsFromFile)
    return workSheetsFromFile;
}
function ParseModelData(Bigdata) {
    console.log("------Generating Model------");
    //const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    console.log(100);
    const UniCompendiumData = Bigdata[0].data; // Uni Data Header
    const UniNameList = UniCompendiumData[0]; // Uni Name Data
    const UniCount = UniNameList.length - 1; // remove the top header
    const SkillList = UniCompendiumData[4];
    const InterestList = UniCompendiumData[5];
    console.log(5);
    var TotalFacultyCount = 0;
    var TotalBranchCount = 0;
    const ModelSkillData = [];
    const ModelInterestData = [];
    const ModelKeyData = [];
    console.log(10);
    for (var i = 1; i <= UniCount; i++) {
        const IndexedUniData = Bigdata[i];
        const UniName = IndexedUniData.name;
        const UniInfo = IndexedUniData.data;
        console.log((i - 1) / UniCount * 90 + 10);
        const FacultyCount = UniInfo[0].length - 1; //the faculty name list
        //we are going to transfer these info into permanent more efficient data storages later
        // wip
        const SkillUni = UniInfo.filter((x) => (!(typeof x[0] === 'undefined') && SkillList.includes(x[0])));
        const InterestUni = UniInfo.filter((x) => (!(typeof x[0] === 'undefined') && InterestList.includes(x[0])));
        //console.log(SkillUni)
        //console.log(UniName)
        for (var j = 1; j <= FacultyCount; j++) {
            //console.log(`->${UniInfo[0][j]}`)
            TotalFacultyCount++;
            const FacultyName = UniInfo[0][j];
            const branchesInfo = UniInfo[2][j];
            if (typeof branchesInfo === 'undefined') {
                continue;
            }
            const branches = branchesInfo.split("\n").map((branch) => branch.split(" ")[1]);
            //console.log(branches)
            //i know shit lookup time but this isnt run often
            TotalBranchCount += branches.length;
            if (!(typeof SkillUni[0][j] === 'undefined') && !(typeof InterestUni[0][j] === 'undefined')) {
                const SkillFacultyData = SkillUni.map((x) => {
                    var t = 0;
                    var c = 0;
                    x[j].split("\n").forEach((e) => {
                        t += Number(e.split(" ")[1].split("%")[0]);
                        c += 100;
                    });
                    return [x[0], t / c]; //scary, also yea its x bar
                });
                const InterestFacultyData = InterestUni.map((x) => {
                    var t = 0;
                    var c = 0;
                    x[j].split("\n").forEach((e) => {
                        t += (Number(e.split(" ")[1].split("%")[0]) - 1) * 2;
                        c += 100;
                    });
                    return [x[0], t / c]; //scary, also yea its x bar
                });
                //console.log(SkillFacultyData,InterestFacultyData)
                ModelSkillData.push(SkillFacultyData);
                ModelInterestData.push(InterestFacultyData);
                ModelKeyData.push(`${UniName}/${FacultyName}`);
            }
        }
    }
    console.log(100);
    console.log("");
    console.log(ModelSkillData.length, ModelInterestData.length);
    return [ModelSkillData, ModelInterestData, ModelKeyData];
}
export default { Load, ParseModelData };
