import { useState } from 'react';

import './App.css';
import {
  ArrowDownToLine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleCheckBig,
  FilePlus2,
  Hourglass,
  RotateCw,
  Search,
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
  TableCaption,
  TableContainer,
  Flex,
  Select,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  Button,
  Td,
} from '@chakra-ui/react';
import Filters from './components/Filters';
import ContainerWrapper from './components/Container';

function App() {
  return (
    <>
      <ContainerWrapper>
        <Heading>Архив документов</Heading>
        <InputGroup w={'400px'}>
          <InputRightElement pointerEvents="none">
            <Search color="grey" />
          </InputRightElement>
          <Input size={'sm'} />
        </InputGroup>
      </ContainerWrapper>

      <ContainerWrapper>
        <Filters />
      </ContainerWrapper>

      <ContainerWrapper>
        <TableContainer>
          <Table variant="simple" size={'sm'}>
            <TableCaption></TableCaption>
            <Thead background={'teal'}>
              <Tr>
                <Th>Дата</Th>
                <Th>Статус</Th>
                <Th>Номер документа</Th>
                <Th>Вид документа</Th>
                <Th>Имя организации</Th>
                <Th>Налоговый период</Th>
                <Th>
                  <Button
                    size={'sm'}
                    height={'5'}
                    leftIcon={<RotateCw size={16} />}
                    variant={'outline'}
                    border={'none'}>
                    Обновить
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>26.08.2023</Td>
                <Td>
                  <Hourglass color="grey" />
                </Td>
                <Td>256</Td>
                <Td>Входящий</Td>
                <Td>ООО DICKPIC</Td>
                <Td>1Q</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>26.08.2023</Td>
                <Td>
                  <Hourglass color="grey" />
                </Td>
                <Td>256</Td>
                <Td>Входящий</Td>
                <Td>ООО DICKPIC</Td>
                <Td>1Q</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>26.08.2023</Td>
                <Td>
                  <X color="red" />
                </Td>
                <Td>256</Td>
                <Td>Входящий</Td>
                <Td>ООО DICKPIC</Td>
                <Td>1Q</Td>
                <Td></Td>
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
      </ContainerWrapper>

      {/* <Hourglass />
      <ArrowDownToLine />
      <X fill="red" />
      <CircleCheckBig />

      <RotateCw />
      <ChevronDown />
      <ChevronUp />
      <UserRound />
      <FilePlus2 />
      <Search /> */}
    </>
  );
}

export default App;
