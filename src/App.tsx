import {  ChakraProvider } from '@chakra-ui/react';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { theme } from './theme';

export const App = () => (
	<ChakraProvider theme={theme}>
		<SectionOne />
		<SectionTwo/>
	</ChakraProvider>
);

// eslint-disable-next-line no-lone-blocks
{
	/* <ColorModeSwitcher justifySelf="flex-end" /> */
}
