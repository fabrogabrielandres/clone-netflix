import React from 'react';
import { Flex, Grid, Img, Text, Input, Button } from '@chakra-ui/react';
import image from '../../assets/imageBackground.jpg';
import { Header } from '../Header/Header';

export const SectionOne = () => {
	return (
		<Grid
			bgGradient={'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)'}
			w="100%"
			h={"100vh"}
		>
			<Img w={'100%'} h="100%" position={'absolute'} top={"-70px"} src={image} zIndex={-1} objectFit={'cover'} />
			<Header />
			<Flex flexDir={'column'}>
				<Text fontWeight={'bold'} textAlign={'center'} lineHeight={{base:"30.8px",sm:"55px"}} fontSize={{base:"28px",sm:'50px'}} color={'white'}>
					Unlimited movies, TV
					<br />
					shows, and more.
				</Text>
				<Text textAlign={'center'} lineHeight={"normal"} fontSize={{base:"18px",sm:'26px'}} color={'white'}>
					Watch anywhere. Cancel anytime.
				</Text>
				<Text fontWeight={'bold'} mb={5} textAlign={'center'} lineHeight={"normal"} fontSize={{base:"18px" ,sm:'19.2px'}} color={'white'}>
					Ready to watch? Enter your email to create or restart your membership.
				</Text>
				<Flex m="0 auto" flexDir={{base:"column",md:"row"}} flexWrap={'wrap'} justifyContent={{base:"center"}} alignItems={{base:"center"}} >
					<Input
						w={{ base: '90vw', sm: '450px' }}
						h={{ base: '60px', md: '60px' }}
						bgColor={'white'}
						placeholder="Email address"
						borderRadius={'0px'}
					/>

					<Button
						_hover={{
							bg: 'primary.100'
						}}
						mt={{base:"4px", md:"0px"}}
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
