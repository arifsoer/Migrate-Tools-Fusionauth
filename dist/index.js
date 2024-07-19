"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const download_data_1 = __importDefault(require("./scripts/download-data"));
const program = new commander_1.Command();
console.log(figlet_1.default.textSync("Data Migration"));
program
    .version("1.0.0")
    .description("this tools to help migrate fusionauth data")
    .option("-s, --setup", "to setup config value for fusion auth client")
    .option("-d, --download", "to start download data from fusionauth server to local device")
    .parse(process.argv);
const options = program.opts();
function executeCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("env ", process.env.FUSIONAUTH_BASE_URL);
        try {
            if (options.download) {
                yield (0, download_data_1.default)();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
executeCommand();
//# sourceMappingURL=index.js.map