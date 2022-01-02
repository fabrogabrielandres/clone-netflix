// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '550px',
	md: '950px',
	lg: '1450px',
	xl: '1540px',
});

export const theme = extendTheme({
	colors: {
		primary: {
			100: '#e50914'
		}
	},
	fonts: {
		heading: 'Open Sans'
		// body: "Netflix Sans"
	},
	breakpoints: {
		...breakpoints
	}
});
