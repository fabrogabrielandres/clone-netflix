import React from 'react';
import { Flex, Grid, Img, Text, Input, Button } from '@chakra-ui/react';
import image from '../../assets/imageBackground.jpg';
import { Header } from '../Header/Header';

export const SectionOne = () => {
	return (
		<Grid
			bgGradient={'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'}
			w="100%"
			h="100vh"
		>
			<Img w={'100%'} h="100%" position={'absolute'} src={image} zIndex={-1} objectFit={'cover'} />
			<Header />
			<Flex flexDir={'column'}>
				<Text fontWeight={'bold'} textAlign={'center'} fontSize={'50px'} color={'white'}>
					Unlimited movies, TV
					<br />
					shows, and more.
				</Text>
				<Text textAlign={'center'} fontSize={'26px'} color={'white'}>
					Watch anywhere. Cancel anytime.
				</Text>

				<Text fontWeight={'bold'} mb={5} textAlign={'center'} fontSize={'19px'} color={'white'}>
					Ready to watch? Enter your email to create or restart your membership.
				</Text>
				<Flex h="60px" m="0 auto" bgColor={'primary.100'} w={'50%'} justify={'center'} alignContent={'center'}>
					<Input h={'100%'} bgColor={'white'} placeholder="Email address" borderRadius={'0px'} />
					<Button
						_hover={{
							bg: 'primary.100'
						}}
						mr="16px"
						ml="16px"
						h="100%"
						w="214px"
						fontSize={'26px'}
						borderRadius={'0px'}
						bgColor={'primary.100'}
						color={'white'}
					>{`Get Started >`}</Button>
				</Flex>
			</Flex>
		</Grid>
	);
};
