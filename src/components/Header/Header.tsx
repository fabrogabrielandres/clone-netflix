import { Box, Button, Flex, HStack, Img, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { CircleIcon } from '../mundoIcon/mundoIcon';

export const Header = () => {
	const [ lenguaje, setLenguaje ] = useState<string>('English');
	return (
		<HStack
			w={'100%'}
			h={'64px'}
			alignItems={'center'}
			justifyContent={{ base: 'space-between' }}
			pl={{ base: '25px', sm: '45px', md: '56px' }}
			pt={{ base: '15px', sm: '23px', md: '28px' }}
		>
			{/* right */}
			<Box w={{ base: '88px', sm: '108px', md: '134px' }} h={{ base: '24px', sm: '32px', md: '36px' }}>
				<Img w={'100%'} h={'100%'} src={logo} alt="logo" />
			</Box>

			{/* left */}
			<Flex>
				<Select
					color={'white'}
					onChange={(e) => {
						setLenguaje(e.target.value);
					}}
					w={{ base: '110px', sm: '110px' }}
					h={{ base: '30px', sm: '36px' }}
					mr={{ base: '12px', sm: '24px' }}
					mt={{base:"2px",md:"1px"}}

				>
					<option value="Español" style={{ backgroundColor: '#333333' }}>
						Español
					</option>
					<option value="English" style={{ backgroundColor: '#333333' }}>
						English
					</option>
				</Select>
				<Button
					mt={{base:"2px",md:"1px"}}
					mr={{ base: '24px', sm: '45px', md: '56px' }}
					w={{ base: '61px', sm: '85px', md: '84px' }}
					h={{ base: '28px', sm: '35px', md: '34px' }}
					fontSize={{ base: '14.4px', sm: '16px' }}
					color={'white'}
					borderRadius={3}
					borderBottom={'none'}
					bgColor={'primary.100'}
				>
					Sign In
				</Button>
			</Flex>
		</HStack>
	);
};
