#!/usr/bin/env bun

import { Command } from "commander";
const program = new Command();

program
    .name("ShellScript")
    .description("Ai based command line interface")
    .version("0.0.1")

program
    .command("WakeUp")
    .description("Show the Banner and pick cli or telegram mode")
    .action(
        async()=>{
            console.log("wakeup calling");
        }
    );
await program.parseAsync(process.argv);