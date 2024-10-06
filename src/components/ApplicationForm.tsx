import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import s from './application.module.css';
import React, { useState } from 'react';
import ContainerWrapper from './Container';
import { ArrowDownToLine, Eye, File } from 'lucide-react';
import Documents from './Documents';

const ApplicationForm: React.FC = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  return (
    <>
      <ContainerWrapper>
        <Flex alignItems={'center'} mb={8}>
          <Badge colorScheme="green" variant="outline">
            NEW
          </Badge>
          <Box ml={10}>{date}</Box>
          <Button ml={'auto'} px={10} color={'orange'} variant="outline" borderColor={'orange'}>
            Редактировать
          </Button>
        </Flex>

        {/* <Box mb={12}>
          <Flex>
            <span className={s.amountOfFiles}>10 файлов</span>
            <div className={s.arrow}>
              <ArrowDownToLine color="grey" />
            </div>
          </Flex>
          <Box
            mt={8}
            maxW={'140px'}
            minH={'150px'}
            cursor={'pointer'}
            _hover={{
              bg: '#d3d3d3',
              borderColor: 'black',
              '--transform-arrow-eye': 'translateY(-60px)',
            }}
            borderRadius={10}
            sx={{
              '--transform-arrow-eye': 'translateY(100%)',
              position: 'relative',
              overflow: 'hidden',
            }}>
            <Flex alignItems={'center'} justifyContent={'center'} height={'100%'}>
              <File size={200} color="grey" />
            </Flex>
            <Box
              p={2}
              size={40}
              bg={'white'}
              borderRadius={100}
              as={ArrowDownToLine}
              color="grey"
              position="absolute"
              bottom="0"
              _hover={{
                color: 'green',
              }}
              left="30%"
              transform="translateX(-50%) var(--transform-arrow-eye)"
              transition="transform 0.3s"
            />
            <Box
              p={2}
              size={40}
              bg={'white'}
              borderRadius={100}
              as={Eye}
              color="grey"
              position="absolute"
              bottom="0"
              _hover={{
                color: 'green',
              }}
              left="70%"
              transform="translateX(-50%) var(--transform-arrow-eye)"
              transition="transform 0.3s"
            />
          </Box>
        </Box> */}

        <Documents />

        <Heading size={'sm'} color={'grey'} mb={4}>
          Примечание
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique aliquam, aperiam at
          repellat sapiente cumque officia a delectus ipsa asperiores sequi voluptatum rem, laborum
          fugiat tempora facere? Doloribus, reprehenderit sequi.
        </Text>
      </ContainerWrapper>
    </>
  );
};

export default ApplicationForm;
