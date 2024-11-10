import { Badge, Box, Button, Flex, Heading, Spinner, Text, Textarea } from '@chakra-ui/react';
import s from './application.module.css';
import React, { useState } from 'react';
import ContainerWrapper from './Container';
import { Send, Upload } from 'lucide-react';
import Documents from './Documents';
import { useNavigate } from 'react-router-dom';

const ApplicationForm: React.FC = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [isSending, setIsSending] = useState(false);
  const [isEdit, setISEdit] = useState<boolean>(true);
  const [noteValue, setNoteValue] = useState<string>('');
  const navigate = useNavigate();

  const sendData = () => {
    setIsSending(true);
    // dispatch()
    setTimeout(() => {
      setIsSending(false);
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <ContainerWrapper>
        <Flex alignItems={'center'} mb={8}>
          <Badge colorScheme="green" variant="outline">
            NEW
          </Badge>
          <Box ml={10}>{date}</Box>
          <Button
            onClick={() => setISEdit(!isEdit)}
            minW={'200'}
            ml={'auto'}
            px={10}
            color={'orange'}
            variant="outline"
            disabled
            borderColor={'orange'}>
            {isEdit ? 'Сохранить' : 'Редактировать'}
          </Button>
        </Flex>
        {
          <Box minH={'300px'}>
            {!isEdit ? (
              <Documents />
            ) : (
              <Flex alignItems={'center'} justifyContent={'center'}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  p={20}
                  border={'2px dotted grey'}
                  m={10}
                  borderRadius={8}
                  transition="0.2s ease-in-out"
                  _hover={{
                    transform: 'scale(1.1)',
                    cursor: 'pointer',
                    transition: '0.18s ease-in',
                  }}>
                  <Upload color="grey" size={56} />
                </Box>
              </Flex>
            )}
          </Box>
        }

        <Heading size={'sm'} color={'grey'} mb={4}>
          Примечание
        </Heading>
        {!isEdit ? (
          <Text>{noteValue}</Text>
        ) : (
          <Textarea onChange={(e) => setNoteValue(e.target.value)} value={noteValue}></Textarea>
        )}
        {!isEdit && (
          <Button
            onClick={sendData}
            mt={14}
            w={'full'}
            h={'60px'}
            fontSize={18}
            colorScheme="green"
            leftIcon={!isSending ? <Send /> : undefined}>
            {!isSending ? 'Отправить заявку' : <Spinner />}
          </Button>
        )}
      </ContainerWrapper>
    </>
  );
};

export default ApplicationForm;
