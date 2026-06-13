import { select ,isCancel } from "@clack/prompts";
import chalk, { Chalk }  from "chalk";
import figlet from "figlet";
import Standard from "figlet/fonts/Standard";

const BANNER_FONT= 'ANSI Shadow'
const SHADOW  = chalk.hex('#5b4d9e');
const FACE= chalk.hex('#d0bed6f6').bold;

function printBannerWithShadow(ascii: string) {
  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW((' ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function runWakeUp() {
    let ascii:string;
    try{
        ascii= figlet.textSync("ShellScript",{font:BANNER_FONT})
    }catch(error){
        ascii=figlet.textSync("ShellScript",{font:Standard})
    }

    printBannerWithShadow(ascii)
    
}