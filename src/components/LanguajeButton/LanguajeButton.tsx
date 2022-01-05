import React from 'react';
import { Flex,  Select } from '@chakra-ui/react';
import './styled.css';
import mundo from '../../assets/mundo.svg';
import { CircleIcon } from '../mundoIcon/mundoIcon';

interface Props {
	dimension: Dimension;
	color?: string;
}

export interface Dimension {
	w: Ancho;
	h: Alto;
}

export interface Ancho {
	base: string;
	sm: string;
}
export interface Alto {
	base: string;
	sm: string;
}

export const LanguajeButton = ({color ,dimension }: Props) => {
	let { w, h } = dimension;

	return (
		<Flex
			w={{ ...w }}
			h={{ ...h }}
			mr={{ base: '12px', sm: '24px' }}
			mt={{ base: '2px', md: '1px' }}
			justifyContent={'flex-end'}
			align={'center'}
			position={'relative'}
		>
			<CircleIcon className="imagen" position={'absolute'} src={mundo} w={{ base: '20%', sm: '20%' }} />
			<Select color={color ? color : '#757575'} className="css-c76kus" w={{ ...w }} h={{ ...h }}>
				<option value="Español" style={{ backgroundColor: '#333333' }}>
					Español
				</option>

				<option value="English" style={{ backgroundColor: '#333333' }}>
					English
				</option>
			</Select>
		</Flex>
	);
};
