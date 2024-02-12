import xlsx from 'node-xlsx';
import fs from 'fs';
import cliProgress from 'cli-progress';
class ArchiveGenerator {
    Generate(Input, Directory) {
        if (!fs.existsSync(Directory)) {
            fs.mkdirSync(Directory);
        }
        const Bigdata = xlsx.parse(Input + "\\bigData.xlsx");
        const UniCompendiumData = Bigdata[0].data; // Uni Data Header
        const UniNameList = UniCompendiumData[0]; // Uni Name Data
        const UniCount = UniNameList.length - 1; // remove the top header
        const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
        bar1.start(UniCount, 0);
        for (var i = 1; i <= UniCount; i++) {
            const IndexedUniData = Bigdata[i];
            const UniName = IndexedUniData.name;
            const UniInfo = IndexedUniData.data;
            fs.access(`${Directory}/${UniName}`, fs.constants.F_OK, (err) => {
                if (err) {
                    fs.mkdirSync(`${Directory}/${UniName}`);
                }
                const FacultyCount = UniInfo[0].length - 1;
                for (var j = 1; j <= FacultyCount; j++) {
                    //console.log(`->${UniInfo[0][j]}`)
                    const FacultyName = UniInfo[0][j];
                    const FacultyData = {};
                    for (var k = 1; k < UniInfo.length; k++) {
                        FacultyData[UniInfo[k][0]] = UniInfo[k][j];
                    }
                    fs.writeFileSync(`${Directory}/${UniName}/${FacultyName}.json`, JSON.stringify(FacultyData));
                }
            });
            bar1.update(i);
        }
    }
}
export default new ArchiveGenerator;
