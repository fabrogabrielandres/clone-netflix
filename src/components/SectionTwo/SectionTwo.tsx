import { Img, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import tv from '../../assets/tv.png';
import video from '../../assets/videotv.m4v';
import { SeparatorSection } from '../SeparatosSection/SeparatorSection';
import './styled.css';
export const SectionTwo = () => {
	return (
		<div>
			<Flex
				bgColor={'black'}
				px={{ sm: '45px' }}
				flexDir={{ base: 'column', md: 'row' }}
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
						Enjoy on your Tv.
					</Text>
					<Text
						mx={'10%'}
						color={'white'}
						fontSize={{ base: '18px', sm: '20px', md: '26px' }}
						lineHeight={'normal'}
						textAlign={{ base: 'center', md: 'start' }}
					>
						Watch on Smart TVs, Playstation, XBox, Chromecast, Apple Tv, Blu-ray players, and more.
					</Text>
				</Flex>
				<Flex justifyContent={'center'} align={'center'} position={'relative'}>
					<Box className="tv">
						<Img src={tv} alt="tv" />
						<video src={video} className="video" autoPlay loop muted />
					</Box>
				</Flex>
			</Flex>
			<SeparatorSection />
		</div>
	);
};
