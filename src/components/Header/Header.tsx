import { Button, Flex, HStack, Img, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { CircleIcon } from '../mundoIcon/mundoIcon';

export const Header = () => {
	const [ lenguaje, setLenguaje ] = useState<string>('English');
	return (
		<HStack mt={'14px'} w={'100%'} h={'64px'} alignItems={'center'} justifyContent={'space-between'}>
			{/* right */}
			<Img h={'36px'} ml={'56px'} src={logo} alt="logo" />

			{/* left */}
			<Flex alignItems="center" h={'100%'}>
				<Select
					color={'white'}
					onChange={(e) => {
						setLenguaje(e.target.value);
					}}
					// mr={'32px'}
					// mr={"2rem"}					
					mr={8}
					w="110px"
				>
					<option value="Español" style={{ backgroundColor: '#333333' }}>
						Español
					</option>
					<option value="English" style={{ backgroundColor: '#333333' }}>
						English
					</option>
				</Select>
				<Button mr={'56px'} padding="17px" w="100px" h="20px" bgColor={'primary.100'} color={'white'}>
					Sign In
				</Button>
			</Flex>
		</HStack>
	);
};
