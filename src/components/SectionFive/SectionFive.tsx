import { Img, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import tv from '../../assets/images5.png';
import { SeparatorSection } from '../SeparatosSection/SeparatorSection';
export const SectionFive = () => {
	return (
		<div>
			<Flex
				bgColor={'black'}
				px={{ sm: '45px' }}
				flexDir={{ base: 'column', md: 'row-reverse' }}
				py={{ base: '50px', sm: '70px' }}
			>
				<Flex
					m={'-5 0'}
					flexDir={'column'}
					alignItems={{ base: 'center', md: 'start' }}
					justifyContent={'center'}
					zIndex={2}
				>
					<Text
						mx={'10%'}
						color={'white'}
						fontSize={{ base: '26px', sm: '40px', md: '50px' }}
						lineHeight={{ base: '28.6px', sm: '44px', md: '55px' }}
					>
						Create profiles for kids.
					</Text>
					<Text
						mx={'10%'}
						color={'white'}
						fontSize={{ base: '18px', sm: '20px', md: '26px' }}
						lineHeight={'normal'}
						textAlign={{ base: 'center', md: 'start' }}
					>
						Send kids on adventures with their favorite characters in a space made just for them—free with
						your membership.
					</Text>
				</Flex>
				<Flex justifyContent={'center'} align={'center'} position={'relative'}>
					<Box className="tv">
						<Img src={tv} alt="tv" />
					</Box>
				</Flex>
			</Flex>
			<SeparatorSection />
		</div>
	);
};
