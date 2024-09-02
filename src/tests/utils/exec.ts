import { exec } from 'child_process';

/**
 * The details of a shell command execution.
 */
interface ExecDetails {
	/**
	 * The exit code.
	 */
	exitCode: number;
	/**
	 * The standard output.
	 */
	stdout: string;
	/**
	 * The standard error.
	 */
	stderr: string;
}

/**
 * Executes a shell command and returns the exit code and output.
 * @param command - The command
 * @returns The exit code and output
 */
export async function getExecDetails(command: string) {
	return new Promise<ExecDetails>((resolve) => {
		exec(command, (error, stdout, stderr) =>
			resolve({
				exitCode: error?.code ?? 0,
				stdout: stdout.slice(0, -1),
				stderr: stderr.slice(0, -1),
			}),
		);
	});
}
