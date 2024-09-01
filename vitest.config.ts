import { UserConfig } from 'vitest/config';

const config: UserConfig = {
	test: {
		watch: false,
		reporters: 'basic',
		silent: true,
		coverage: {
			reporter: ['text'],
		},
		clearMocks: true,
	},
};

export default config;
