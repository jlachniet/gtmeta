import { describe, expect, it, vi } from 'vitest';
import { main } from '../index.js';

describe('main()', () => {
	const consoleLogSpy = vi.spyOn(console, 'log');

	it('should log "Hello, World!"', () => {
		main();
		expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World!');
	});
});
