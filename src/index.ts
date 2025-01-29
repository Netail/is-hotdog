import { createDeepSeek } from '@ai-sdk/deepseek';
import { APICallError, generateText } from 'ai';
import { readFileSync } from 'node:fs';

export const isHotdog = async (): Promise<boolean> => {
	const image = readFileSync('./examples/hotdog.png').toString('base64');

	const deepSeek = createDeepSeek({
		apiKey: '',
	});

	try {
		const result = await generateText({
			model: deepSeek('deepseek-reasoner'),
			messages: [
				{
					role: 'user',
					content: [
						{
							type: 'text',
							text: 'Does the following image contain a eatable hotdog? You can only answer with "true" or "false".',
						},
						{
							type: 'image',
							image,
						},
					],
				},
			],
		});

		console.log('Output:', result.text);

		return false;
	} catch (err) {
		if (err instanceof APICallError) {
			console.error(
				(err.data as { error: { message: string } }).error.message,
			);
			process.exit(1);
		} else if (err instanceof Error) {
			console.error(err.message);
			process.exit(1);
		}

		throw err;
	}
};

isHotdog();
