import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import s from './application.module.css';
import React, { useState } from 'react';
import ContainerWrapper from './Container';
import { ArrowDownToLine, Eye, File, Upload } from 'lucide-react';
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
