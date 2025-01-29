export const isHotdog = (input: string): boolean => {
	return ['hot dog', 'hotdog', '🌭'].includes(input.toLocaleLowerCase());
};
