import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ContainerWrapper from './Container';
import { Hourglass } from 'lucide-react';
import Documents from './Documents';

const ArchiveRecord: React.FC = () => {
  return (
    <>
      <ContainerWrapper>
        <Flex alignItems={'center'} mb={8}>
          <Box fontWeight={'500'}>12.06.2024</Box>
          <Box ml={10} mr={10} fontWeight={'500'} textDecoration={'underline'}>
            ООО КРЕЙЗИ ДУД
          </Box>
          <Hourglass color="grey" />
        </Flex>

        <Flex>
          <Box mr={10}>
            <span style={{ fontWeight: 'bold' }}>Дата документа:</span> 12.06.2024
          </Box>
          <Box>
            <span style={{ fontWeight: 'bold' }}>Номер:</span> 12.06.2024
          </Box>
        </Flex>
        <Flex mb={4}>
          <Box mr={10}>
            <span style={{ fontWeight: 'bold' }}>Вид:</span> Болничный лист (вх.)
          </Box>
          <Box>
            <span style={{ fontWeight: 'bold' }}>Тип:</span> Не определен
          </Box>
        </Flex>
        <Flex>
          <Box mr={10}>
            <span style={{ fontWeight: 'bold' }}>Налоговый период:</span> 2 квартал
          </Box>
          <Box>
            <span style={{ fontWeight: 'bold' }}>Конец периода:</span> 12.06.2024
          </Box>
        </Flex>
        <Box mb={10}>
          <span style={{ fontWeight: 'bold' }}>Год:</span> 2024
        </Box>

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

export default ArchiveRecord;
