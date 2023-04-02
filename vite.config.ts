import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { compilerOptions } from './tsconfig.json';

function obtainAliases() {
	const tsAliases = compilerOptions.paths;

	const aliases: Record<string, string> = {};

	for (const key in tsAliases) {
		aliases[key] = path.resolve(__dirname, tsAliases[key][0]);
	}

	return aliases;
}

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			...obtainAliases()
		}
	}
});
