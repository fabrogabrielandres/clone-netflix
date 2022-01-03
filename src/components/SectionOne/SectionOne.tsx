import React from 'react';
import { Flex, Grid, Img, Text, Input, Button } from '@chakra-ui/react';
import image from '../../assets/imageBackground.jpg';
import { Header } from '../Header/Header';

export const SectionOne = () => {
	return (
		<Grid
			bgGradient={'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'}
			w="100%"
			h={{ base: '520px', sm: '764px', md: '706px' }}
		>
			<Header />
			<Img
				w={'100vw'}
				h={{ base: '580px', sm: '820px', md: '764px' }}
				position={'absolute'}
				top={'-70px'}
				src={image}
				zIndex={-1}
				objectFit={'cover'}
			/>
			<Flex flexDir={'column'}>
				<Text
					textAlign={'center'}
					lineHeight={{ base: '30.8px', sm: '55px', md: '55px' }}
					fontSize={{ base: '28px', sm: '50px' }}
					color={'white'}
					fontWeight={'bold'}
				>
					Unlimited movies, TV
					<br />
					shows, and more.
				</Text>
				<Text
					textAlign={'center'}
					lineHeight={{ base: '30.8px', sm: '55px', md: '55px' }}
					fontSize={{ base: '18px', sm: '26px' }}
					color={'white'}
				>
					Watch anywhere. Cancel anytime.
				</Text>
				<Text
					mb={5}
					textAlign={'center'}
					lineHeight={{ base: '30.8px', sm: '55px', md: '55px' }}
					fontSize={{ base: '18px', sm: '19.2px' }}
					color={'white'}
				>
					Ready to watch? Enter your email to create or restart your membership.
				</Text>
				<Flex
					m="0 auto"
					flexDir={{ base: 'column', md: 'row' }}
					flexWrap={'wrap'}
					justifyContent={{ base: 'center' }}
					alignItems={{ base: 'center' }}
				>
					<Input
						w={{ base: '90vw', sm: '450px' }}
						h={{ base: '48px', md: '60px' }}
						bgColor={'white'}
						placeholder="Email address"
						borderRadius={'0px'}
					/>

					<Button
						_hover={{
							bg: 'primary.100'
						}}
						mt={{ base: '10px', md: '0px' }}
						h={{ base: '40px', md: '60px' }}
						w={{ base: '131px', md: '214px' }}
						fontSize={{ base: '16px', md: '26px' }}
						borderRadius={'0px'}
						bgColor={'primary.100'}
						color={'white'}
					>{`Get Started >`}</Button>
				</Flex>s
			</Flex>
		</Grid>
	);
};
