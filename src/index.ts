import figlet from 'figlet';
import { Command } from 'commander';
import ExecuteDownload from './scripts/download-data'

const program = new Command()

console.log(figlet.textSync('Data Migration'));

program
    .version('1.0.0')
    .description('this tools to help migrate fusionauth data')
    .option("-s, --setup", "to setup config value for fusion auth client")
    .option("-d, --download", "to start download data from fusionauth server to local device")
    .parse(process.argv);

const options = program.opts();


async function executeCommand() {
    try {
        if (options.download) {
            await ExecuteDownload()
        }
    } catch (error) {
        console.error(error)
    }
}

executeCommand()