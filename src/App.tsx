import { ChakraProvider } from '@chakra-ui/react';
import { SectionFive } from './components/SectionFive/SectionFive';
import { SectionFour } from './components/SectionFour/SectionFour';
import { SectionOne } from './components/SectionOne/SectionOne';
import { SectionSeven } from './components/SectionSeven/SectionSeven';
import { SectionSix } from './components/SectionSix/SectionSix';
import { SectionThree } from './components/SectionThree/SectionThree';
import { SectionTwo } from './components/SectionTwo/SectionTwo';
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { theme } from './theme';

export const App = () => (
	<ChakraProvider theme={theme}>
		<SectionOne />
		<SectionTwo />
		<SectionThree />
		<SectionFour />
		<SectionFive/>
		<SectionSix/>
		<SectionSeven/>
		
	</ChakraProvider>
);

// eslint-disable-next-line no-lone-blocks
{
	/* <ColorModeSwitcher justifySelf="flex-end" /> */
}
