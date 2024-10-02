import { useState } from 'react';

import './App.css';
import {
  ArrowDownToLine,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  FilePlus2,
  Hourglass,
  RotateCw,
  UserRound,
  X,
} from 'lucide-react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Select,
  Button,
  Input,
  Heading,
} from '@chakra-ui/react';

function App() {
  return (
    <>
      <Heading>Архив документов</Heading>
      <div>
        <Input placeholder="Select Date" size="md" type="datetime-local" />
        <Button
          size={'sm'}
          leftIcon={<Hourglass name="hourglass" />}
          colorScheme="teal"
          variant="solid">
          В обработке
        </Button>
        <Button
          size={'sm'}
          leftIcon={<CircleCheckBig name="ok" />}
          colorScheme="teal"
          variant="outline">
          Обработана
        </Button>
        <Button size={'sm'} leftIcon={<X name="x" />} colorScheme="teal" variant="outline">
          Отклонена
        </Button>
        <Button
          size={'sm'}
          leftIcon={<Hourglass name="hourglass" />}
          colorScheme="teal"
          variant="solid">
          Сегодня
        </Button>
        <Button
          size={'sm'}
          leftIcon={<CircleCheckBig name="ok" />}
          colorScheme="teal"
          variant="outline">
          Неделя
        </Button>
        <Button size={'sm'} leftIcon={<X name="x" />} colorScheme="teal" variant="outline">
          месяц
        </Button>
      </div>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead background={'pink'} color={'white'}>
            <Tr>
              <Th>Дата</Th>
              <Th>Статус</Th>
              <Th isNumeric>Номер документа</Th>
              <Th>Вид документа</Th>
              <Th>Имя организации</Th>
              <Th>Налоговый период</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>26.08.2023</Th>
              <Th>
                <Hourglass />
              </Th>
              <Th isNumeric>256</Th>
              <Th>Входящий</Th>
              <Th>ООО DICKPIC</Th>
              <Th>1Q</Th>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Flex alignItems={'center'}>
                Строк на странице
                <Select border={'none'}>
                  <option value="option1">30</option>
                  <option value="option2">15</option>
                  <option value="option3">5</option>
                </Select>
                <Flex>
                  <ChevronLeft />
                  <ChevronRight />
                </Flex>
              </Flex>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Camera />
      <Hourglass />
      <ArrowDownToLine />
      <X fill="red" />
      <CircleCheckBig />

      <RotateCw />
      <ChevronDown />
      <ChevronUp />
      <UserRound />
      <FilePlus2 />
    </>
  );
}

export default App;
