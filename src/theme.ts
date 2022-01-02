// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// export const theme = {
//   styles: {
//     global: {
//       'html, body': {
//         color: 'gray.600',
//         lineHeight: 'tall',
//       },
//     },
//   },
//    colors: {
//      primary: {
//        100: "#e50914",
//      },
//    },
// }

export const theme = extendTheme({
	colors: {
		primary: {
			100: '#e50914'
		}
	},
	fonts: {
		heading: 'Open Sans',
		// body: "Netflix Sans"
	},

});
