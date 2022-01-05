import React from 'react';
import { Box, Flex, Text, Select, Img } from '@chakra-ui/react';
import { Dimension, LanguajeButton } from '../LanguajeButton/LanguajeButton';
export const SectionSeven = () => {
	let arr = [
		'FAQ',
		'Help Center',
		'Account',
		'Media Center',
		' Investor Relations',
		'Jobs',
		'Ways to Watch',
		'Terms of Use',
		'Privacy',
		'Cookie Preferences',
		'Corporate Information',
		'Contac Us',
		'Speed Test',
		'Legal Notices',
		'Only on Netflix'
	];

	let dimension: Dimension = {
		w: { base: '110px', sm: '137px' },
		h: { base: '30px', sm: '53px' }
	};

	return (
		<Box bgColor={'black'} pl={"45px"}>
			<Box  minH={'324px'}  maxW={'1000px'} p={'70px 45px 0px 45px'} m="0 auto">
				<Flex flexDir={'column'} justifyContent={'center'} alignItems={'start'}>
					<Text color="#757575" mb={'30px'}>
						Questions? call 0-800-666-2808
					</Text>
					<Flex flexWrap={'wrap'} maxW={'900px'} h={{ md: '128px' }} mb={"20px"}>
						{arr.map((item, idx) => {
							return (
								<Text
									key={idx}
									color={'#757575'}
									w={{ base: '50%', sm:'33%',xsm:"25%" }}
									fontSize={'13px' }
								>
									{item}
								</Text>
							);
						})}
					</Flex>
					<LanguajeButton dimension={dimension}/>

					<Text color="#757575" mb={"33px"} mt={"24px"}>Netflix Argentina</Text>
				</Flex>
			</Box>
		</Box>
	);
};
