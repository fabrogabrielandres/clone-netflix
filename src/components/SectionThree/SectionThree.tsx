import { Img, Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';
import phone from '../../assets/mobile.jpg';
import image from '../../assets/imagesection3.png';
import animation from '../../assets/gifsection3.gif';
export const SectionThree = () => {
	return (
		<Flex
		px={{ sm: '45px' }}
			flexDir={{ base: 'column-reverse', md: 'row' }}
			py={{ base: '50px', sm: '70px' }}
			bgColor={'black'}
		>
			<Flex justifyContent={'center'} align={'center'} position={'relative'}>
				<Box className="tv">
					<Img src={phone} alt="phone" />
					<Flex
						m="0 auto"
						borderRadius={'lg'}
						alignItems={'center'}
						border={'2px grey solid'}
						position={'absolute'}
						w={'55%'}
						h={{ base: '15%' }}
						bottom={'10%'}
						left={'20%'}
						bgColor={'black'}
					>
						<Img src={image} alt="imagePhone" h={'90%'} marginX={'5%'} />

						<Flex w={'70%'} flexDir={'column'}>
							<Text color={'white'} fontSize={{ md: '16px' }}>
								Stranger Things
							</Text>
							<Text color={'#0071eb'} fontSize={{ md: '14.4px' }}>
								Downloading...
							</Text>
						</Flex>
						<Img src={animation} h={'90%'} marginX={'5%'} />
					</Flex>
				</Box>
			</Flex>
			<Flex flexDir={'column'} alignItems={{ base: 'center', md: 'start' }} justifyContent={'center'}>
				<Text
					mx={{ base: '0%', sm: '10%' }}
					textAlign={{ base: 'center', md: 'start' }}
					color={'white'}
					fontSize={{ base: '26px', sm: '40px', md: '50px' }}
					lineHeight={{ base: '28.6px', sm: '44px', md: '55px' }}
				>
					Download your shows to watch offline.
				</Text>
				<Text
					mx={{ base: '0%', sm: '10%' }}
					color={'white'}
					fontSize={{ base: '18px', sm: '20px', md: '26px' }}
					lineHeight={'normal'}
					textAlign={{ base: 'center', md: 'start' }}
				>
					Save your favorites easily and always have something to watch.
				</Text>
			</Flex>
		</Flex>
	);
};
