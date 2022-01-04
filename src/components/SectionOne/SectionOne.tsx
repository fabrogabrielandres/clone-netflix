import React from 'react';
import {  Flex, Grid, Img, Text } from '@chakra-ui/react';
import image from '../../assets/imageBackground.jpg';
import { Header } from '../Header/Header';
import { Search } from '../Search/Search';
import { SeparatorSection } from '../SeparatosSection/SeparatorSection';

export const SectionOne = () => {
	return (
		<div>
			<Grid
				bgGradient={'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'}
				w="100%"
				h={{ base: '520px', sm: '764px', md: '706px' }}
			>
				<Header />
				<Flex
					w={{ base: '95%', sm: '85%', md: '50%' }}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					m="0 auto"
					mt={{ sm: '-550px', md: '-350px' }}
				>
					<Text
						textAlign={'center'}
						lineHeight={{ base: '30.8px', sm: '55px', md: '55px' }}
						fontSize={{ base: '28px', sm: '50px' }}
						color={'white'}
						fontWeight={'bold'}
					>
						Unlimited movies, TV shows, and more.
					</Text>
					<Text
						mt={{ sm: '30px' }}
						fontWeight={'bold'}
						textAlign={'center'}
						lineHeight={{ base: '30.8px', sm: '0px', md: '55px' }}
						fontSize={{ base: '18px', sm: '26px' }}
						color={'white'}
					>
						Watch anywhere. Cancel anytime.
					</Text>

					<Search />
				</Flex>
				<Img
					w={'100%'}
					h={{ base: '580px', sm: '820px', md: '764px' }}
					position={'absolute'}
					// top={'-40px'}
					src={image}
					zIndex={-1}
					objectFit={'cover'}
				/>
			</Grid>
			<SeparatorSection />
		</div>
	);
};
