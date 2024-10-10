import { ChevronLeft, ChevronRight, Hourglass, RotateCw, X } from 'lucide-react';
import ContainerWrapper from '../components/Container';
import Filters from '../components/Filters';
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
  Heading,
  Button,
  Td,
  Box,
} from '@chakra-ui/react';

function ApplicationArchive() {
  const numberOfRecords = 5;
  return (
    <ContainerWrapper>
      <Heading mb={5}>Архив заявок</Heading>
      <Filters />
      <TableContainer mt={6}>
        <Table variant="simple" size={'sm'}>
          <TableCaption></TableCaption>
          <Thead bgColor={'#ADD8E6'}>
            <Tr>
              <Th>Дата</Th>
              <Th>Статус</Th>
              <Th>Номер документа</Th>
              <Th>Тип документа</Th>
              <Th>Имя организации</Th>
              <Th>Налоговый период</Th>
              <Th>
                <Button
                  size={'sm'}
                  height={'5'}
                  leftIcon={<RotateCw size={16} color="orange" />}
                  variant={'outline'}
                  border={'none'}
                  color="orange">
                  Обновить
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>26.08.2023</Td>
              <Td>
                <Hourglass color="grey" size={20} />
              </Td>
              <Td>256</Td>
              <Td>Входящий</Td>
              <Td>ООО DICKPIC</Td>
              <Td>1Q</Td>
              <Td></Td>
            </Tr>
            <Tr
              _hover={{
                bg: '#e9e9e9',
              }}>
              <Td>26.08.2023</Td>
              <Td>
                <Hourglass color="grey" size={20} />
              </Td>
              <Td>256</Td>
              <Td>Входящий</Td>
              <Td>ООО DICKPIC</Td>
              <Td>1Q</Td>
              <Td></Td>
            </Tr>
            <Tr
              _hover={{
                bg: '#e9e9e9',
              }}>
              <Td>26.08.2023</Td>
              <Td>
                <X color="red" size={20} />
              </Td>
              <Td>256</Td>
              <Td>Входящий</Td>
              <Td>ООО DICKPIC</Td>
              <Td>1Q</Td>
              <Td></Td>
            </Tr>
          </Tbody>
          <Tfoot>
            {/* <Tr>
              <Flex alignItems={'center'}>
                <Box mr={4}>Строк на странице</Box>
                <Select border={'none'} maxW={20} mr={4}>
                  <option value="option1">30</option>
                  <option value="option2">15</option>
                  <option value="option3">5</option>
                </Select>
                <Flex>
                  <Box mr={4}>
                    {1} - {30} из {numberOfRecords}
                  </Box>
                  <ChevronLeft />
                  <ChevronRight />
                </Flex>
              </Flex>
            </Tr> */}
          </Tfoot>
        </Table>
      </TableContainer>
    </ContainerWrapper>
  );
}

export default ApplicationArchive;
