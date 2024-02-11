import xlsx from 'node-xlsx';
import cliProgress from 'cli-progress';

// create a new progress bar instance and use shades_classic theme

function Load(Path: string) {
    const workSheetsFromFile = xlsx.parse(Path);
    //console.log(workSheetsFromFile)
    return workSheetsFromFile
}
function ParseModelData(Bigdata: {
    name: string;
    data: any[][];
}[]) {
    console.log("------Generating Model------")
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(100, 0);
    const UniCompendiumData = Bigdata[0].data // Uni Data Header
    const UniNameList = UniCompendiumData[0]  // Uni Name Data
    const UniCount = UniNameList.length - 1   // remove the top header

    const SkillList = UniCompendiumData[4]  
    const InterestList = UniCompendiumData[5]  
    const PersonalityList = ["personality"]
    bar1.update(5)


    var TotalFacultyCount = 0
    var TotalBranchCount = 0
    const ModelSkillData: any[][] = []
    const ModelInterestData: any[][] = []
    const ModelPersonalityData: any[][] = []
    const ModelKeyData: string[] = []
    bar1.update(10)
    for (var i = 1; i <= UniCount; i++) {
        const IndexedUniData = Bigdata[i];
        const UniName = IndexedUniData.name
        const UniInfo = IndexedUniData.data
        bar1.update((i-1)/UniCount*90+10)

        const FacultyCount = UniInfo[0].length - 1//the faculty name list
        //we are going to transfer these info into permanent more efficient data storages later
        // wip
        const SkillUni = UniInfo.filter(
            (x) => (!(typeof x[0] === 'undefined') && SkillList.includes(x[0]))
        )
        const InterestUni = UniInfo.filter(
            (x) => (!(typeof x[0] === 'undefined') && InterestList.includes(x[0]))
        )
        const PersonalityUni = UniInfo.filter(
            (x) => (!(typeof x[0] === 'undefined') && PersonalityList.includes(x[0]))
        )
        //console.log(SkillUni)
        //console.log(UniName)
        for (var j = 1; j <= FacultyCount; j++) {
            //console.log(`->${UniInfo[0][j]}`)
            TotalFacultyCount++

            const FacultyName = UniInfo[0][j]

            const branchesInfo = UniInfo[2][j]
            if (typeof branchesInfo === 'undefined') {
                continue
            }

            const branches = branchesInfo.split("\n").map(
                (branch: string) => branch.split(" ")[1]
            )
            //console.log(branches)
            //i know shit lookup time but this isnt run often
            TotalBranchCount += branches.length

            if (!(typeof SkillUni[0][j] === 'undefined') && !(typeof InterestUni[0][j] === 'undefined') && !(typeof PersonalityUni[0] === 'undefined') && !(typeof PersonalityUni[0][j] === 'undefined')) {
                const SkillFacultyData = SkillUni.map((x) => {
                    var t = 0;
                    var c = 0;
                    if(typeof x[j].split !== "function"){
                        console.log(UniName,FacultyName,x,j)
                        return [x[0], 0.5]
                    }
                    x[j].split("\n").forEach((e: string) => {
                        if(typeof e.split(" ")[1]==="undefined"){
                            console.log(e)
                            return [x[0], 0.5]
                        }
                        t += Number(e.split(" ")[1].split("%")[0]);
                        c += 100
                    });
                    return [x[0], t / c];//scary, also yea its x bar
                }
                )
                const InterestFacultyData = InterestUni.map((x) => {
                    var t = 0;
                    var c = 0;
                    if(typeof x[j].split !== "function"){
                        console.log(UniName,FacultyName,x,j)
                        return [x[0], 0.5]
                    }
                    x[j].split("\n").forEach((e: string) => {
                        if(typeof e.split(" ")[1]==="undefined"){
                            console.log(e)
                            return [x[0], 0.5]
                        }
                        t += (Number(e.split(" ")[1].split("%")[0])-1)*2;
                        c += 100
                    });
                    return [x[0], t / c];//scary, also yea its x bar
                }
                )
                
                const PD:string = PersonalityUni[0][j]
            
                const PersonalityFacultyData:(number|string)[][] = [[]]
                if(typeof PD === "undefined"||typeof PD.split !== "function"){
                    //console.log(UniName,FacultyName,PD,j)
                    PersonalityFacultyData[0] = ["IE", 0]
                    PersonalityFacultyData[1] = ["NS", 0]
                    PersonalityFacultyData[2] = ["TF", 0]
                    PersonalityFacultyData[2] = ["PJ", 0]
                }else{
                    var tIE = 0;
                    var cIE = 0;
                    var tNS = 0;
                    var cNS = 0;
                    var tTF = 0;
                    var cTF = 0;
                    var tPJ = 0;
                    var cPJ = 0;
                    PD.split("\n").map((e:any)=>{
                        
                        String(e).split(" ").forEach((e:string) => {
                            if((String(e[0])!=='I') &&  (String(e[0])!=='E')){
                                return
                            }
                                console.log(String(e[0]))
                                if(e[0]==="I"){
                                    tIE+=1
                                }else if(e[0]==="E"){
                                    tIE-=1
                                }cIE += 1

                                console.log(String(e[1]))
                                if(e[1]==="N"){
                                    tNS+=1
                                }else if(e[1]==="S"){
                                    tNS-=1
                                }cNS += 1

                                console.log(String(e[2]))
                                if(e[2]==="T"){
                                    tTF+=1
                                }else if(e[2]==="F"){
                                    tTF-=1
                                }cTF += 1

                                console.log(String(e[3]))
                                if(e[3]==="P"){
                                    tPJ+=1
                                }else if(e[3]==="J"){
                                    tPJ-=1
                                }cPJ += 1
                            
                        })
                    })
                    PersonalityFacultyData[0] = ["IE", (tIE / cIE)]
                    if(cIE === 0) PersonalityFacultyData[0] = ["IE", 0]
                    PersonalityFacultyData[1] = ["NS", (tNS / cNS)]
                    if(cNS === 0) PersonalityFacultyData[1] = ["NS", 0]
                    PersonalityFacultyData[2] = ["TF", (tTF / cTF)]
                    if(cTF === 0) PersonalityFacultyData[2] = ["TF", 0]
                    PersonalityFacultyData[3] = ["PJ", (tPJ / cPJ)]
                    if(cPJ === 0) PersonalityFacultyData[3] = ["PJ", 0]
                }
                

                
                 //I-E
//x[j].split("\n").forEach((e: string) => {
    //t += (Number(e.split(" ")[1].split("%")[0])-1)*2;
    //c += 100
//});
                //console.log(SkillFacultyData,InterestFacultyData)

                ModelSkillData.push(SkillFacultyData)
                ModelInterestData.push(InterestFacultyData)
                ModelPersonalityData.push(PersonalityFacultyData)
                ModelKeyData.push(`${UniName}/${FacultyName}`)
            }
        }
    }
    bar1.update(100)
    console.log("")
    console.log(ModelSkillData.length,ModelInterestData.length)
    return [ModelSkillData, ModelInterestData, ModelPersonalityData, ModelKeyData]
}


export default { Load , ParseModelData };