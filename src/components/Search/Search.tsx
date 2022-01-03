import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const Search = () => {
	return (
		<div>
			<Flex flexDir={'column'}
			alignItems={"center"}
			justifyContent={"center"}
			mb={{base:"20px"}}

			>
				<Text
					maxWidth={{ sm: '90%' }}
					textAlign={'center'}
					lineHeight={{ base: '30.8px', sm: '25px', md: '55px' }}
					fontSize={{ base: '18px', sm: '19.2px' }}
					mt={{ sm: '20px' }}
					color={'white'}
					fontWeight={"bold"}
				>
					Ready to watch? Enter your email to create or restart your membership.
				</Text>
			</Flex>

			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				flexWrap={'wrap'}
				justifyContent={{ base: 'center' }}
				alignItems={{ base: 'center' }}
				minWidth={{ md: '750px' }}
			>
				<Input
					w={{ base: '90vw', sm: '500px', md: '450px' }}
					h={{ base: '48px', sm: '60px', md: '60px' }}
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
			</Flex>
		</div>
	);
};
