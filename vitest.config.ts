import { coverageConfigDefaults, UserConfig } from 'vitest/config';

const config: UserConfig = {
	test: {
		watch: false,
		reporters: 'basic',
		silent: true,
		coverage: {
			exclude: [...coverageConfigDefaults.exclude, 'src/index.ts'],
			reporter: ['text'],
		},
		clearMocks: true,
	},
};

export default config;
