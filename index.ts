#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeUp } from "./tui/WakeUp.ts";
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
            
            await runWakeUp();
            
        }
    );
await program.parseAsync(process.argv);