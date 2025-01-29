#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
	.name('Is Hotdog?')
	.description('Is this a hotdog?')
	.argument('[files...]', 'Files to check')
	.option('-t, --token <api-token>', 'API Token')
	.action((files, options) => console.log({ files, options }));

program.parse();
