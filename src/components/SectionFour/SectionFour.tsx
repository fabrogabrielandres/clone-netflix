import { Img, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import tv from '../../assets/imagesection4.png';
import video from '../../assets/video4.m4v';
import { SeparatorSection } from '../SeparatosSection/SeparatorSection';
import './styled.css';

export const SectionFour = () => {
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
						Watch everywhere.
					</Text>
					<Text
						mx={'10%'}
						color={'white'}
						fontSize={{ base: '18px', sm: '20px', md: '26px' }}
						lineHeight={'normal'}
						textAlign={{ base: 'center', md: 'start' }}
					>
						Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
					</Text>
				</Flex>
				<Flex justifyContent={'center'} align={'center'} position={'relative'}>
					<Box className="tv">
						<Img src={tv} alt="tvv" />
						<video src={video} className="videoo" autoPlay loop muted />
					</Box>
				</Flex>
			</Flex>
			<SeparatorSection />
		</div>
	);
};
