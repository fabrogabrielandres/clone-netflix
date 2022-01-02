import { Button, Flex, HStack, Img, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { CircleIcon } from '../mundoIcon/mundoIcon';

export const Header = () => {
	const [ lenguaje, setLenguaje ] = useState<string>('English');
	return (
		<HStack mt={'14px'} w={'100%'} h={'64px'} alignItems={'center'} justifyContent={{base:"space-evenly",sm:"space-between"}}>
			{/* right */}
			<Img
				h={[ '24px', '32px', '36px', '45px' ]}
				w={[ '88px', '108px', '134px', '167' ]}
				ml={{base:'24px',sm:"45px" ,md:"56px"}}
				src={logo}
				alt="logo"
			/>

			{/* left */}
			<Flex alignItems="center">
				<Select
					color={'white'}
					onChange={(e) => {
						setLenguaje(e.target.value);
					}}
					w={{ base: '110px', sm: '110px' }}
					h={{ base: '30px', sm: '36px' }}
					mr={{base:'12px',sm:"24px"}}

				>
					<option value="Español" style={{ backgroundColor: '#333333' }}>
						Español
					</option>
					<option value="English" style={{ backgroundColor: '#333333' }}>
						English
					</option>
				</Select>
				<Button
					mr={{base:"26px" ,sm:'45px', md:"56px"}}
					w={{ base: '75px', sm: '90px' }}
					h={{ base: '30px', sm: '35px' }}
					color={'white'}
					bgColor={'primary.100'}
				>
					Sign In
				</Button>
			</Flex>
		</HStack>
	);
};
