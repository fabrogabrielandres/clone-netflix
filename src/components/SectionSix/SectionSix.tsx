import React, { useState } from 'react';
import { Search } from '../Search/Search';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Text } from '@chakra-ui/react';
import { infosectionsix } from './moked';
import { AddIcon } from '@chakra-ui/icons';
import './styled.css';
import { SeparatorSection } from '../SeparatosSection/SeparatorSection';

export const SectionSix = () => {
	const [ addClass, setAddClass ] = useState(false);

	return (
		<div>
			<Box bgColor={'black'} p={'30px'}>
				<Text
					textAlign={'center'}
					color={'white'}
					fontSize={{ md: '50px' }}
					lineHeight={{ md: '55px' }}
					mt={{ md: '70px' }}
					mb={{ md: '52px' }}
				>
					Frequently Asked Questions
				</Text>
				<Accordion
					defaultIndex={[ 0 ]}
					allowMultiple
					w={{ base: '100%', sm: '65%' }}
					m={{ base: '0% 0%', sm: '0 auto' }}
				>
					{infosectionsix.map((item, idx) => {
						return (
							<Box bgColor={'#303030'} key={idx} mb={'9px'}>
								<AccordionItem className="chakra-accordion ">
									<Text color={'white'}>
										<AccordionButton
											onClick={() => {
												setAddClass(!addClass);
												console.log(`iconAdd${idx}`);
												
											}}
										>
											<Flex
												flex="1"
												alignItems={'center'}
												textAlign="left"
												h={{ md: '54px' }}
												fontSize={{ base: '18px', sm: '20px', md: '26px' }}
											>
												{item.title}
											</Flex>

											<AddIcon
												className={addClass ? `iconAdd` : ''}
												boxSize={{ base: '20px', sm: '25px', md: '30px' }}
											/>
										</AccordionButton>
									</Text>
									<AccordionPanel pb={4} fontSize={{ base: '18px', sm: '20px', md: '26px' }}>
										<Text color={'white'}>{item.subone}</Text>
									</AccordionPanel>
									<AccordionPanel pb={4} fontSize={{ base: '18px', sm: '20px', md: '26px' }}>
										<Text color={'white'}>{item.subtwo ? item.subtwo : ''}</Text>
									</AccordionPanel>
								</AccordionItem>
							</Box>
						);
					})}
				</Accordion>
				<Search />
			</Box>
			<SeparatorSection />
		</div>
	);
};
