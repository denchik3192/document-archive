import { Badge, Box, Button, Card, Flex, Heading, Text } from '@chakra-ui/react';
import s from './application.module.css';

import React from 'react';
import ContainerWrapper from './Container';
import { ArrowDownToLine, Eye, File } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  return (
    <>
      <ContainerWrapper>
        <Flex alignItems={'center'} mb={8}>
          <Badge colorScheme="green" variant="outline">
            NEW
          </Badge>
          <Box ml={10}>04.04.2024</Box>
          <Button
            ml={'auto'}
            px={10}
            color={'orange'}
            variant="outline"
            mr={4}
            borderColor={'orange'}>
            Редактировать
          </Button>
        </Flex>

        <Box mb={12}>
          <Flex>
            <span className={s.amountOfFiles}>10 файлов</span>
            <div className={s.arrow}>
              <ArrowDownToLine color="grey" />
            </div>
          </Flex>
          <Box maxW={'140px'} minH={'170px'}>
            <Flex alignItems={'center'} justifyContent={'center'} height={'100%'}>
              <File size={200} color="grey" />
            </Flex>
            <ArrowDownToLine color="grey" />
            <Eye color="grey" />
          </Box>
        </Box>

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
