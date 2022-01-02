import {  ChakraProvider } from '@chakra-ui/react';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTree } from './components/SectionTree/SectionTree';
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { theme } from './theme';

export const App = () => (
	<ChakraProvider theme={theme}>
		<SectionOne />
		<SectionTree />
	</ChakraProvider>
);

// eslint-disable-next-line no-lone-blocks
{
	/* <ColorModeSwitcher justifySelf="flex-end" /> */
}
