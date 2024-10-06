import { ChevronDown, ChevronUp, CircleCheckBig, Hourglass, Search, X } from 'lucide-react';
import {
  Flex,
  Select,
  Button,
  Input,
  Text,
  Box,
  Heading,
  InputGroup,
  InputRightElement,
  Collapse,
} from '@chakra-ui/react';
import { useState } from 'react';

const Filters: React.FC = () => {
  const quickTransition: string[] = ['Сегодня', 'Неделя', 'Месяц'];
  const [isFilterActive, setIsFilterActive] = useState<boolean>(true);

  return (
    <div style={{ width: '100%' }}>
      <Flex alignItems={'center'}>
        <Heading
          size={'m'}
          color={'orange'}
          mr={2}
          cursor={'pointer'}
          onClick={() => setIsFilterActive(!isFilterActive)}>
          Фильтр
        </Heading>
        {isFilterActive ? (
          <ChevronUp color={'orange'} style={{ cursor: 'pointer' }} />
        ) : (
          <ChevronDown color={'orange'} style={{ cursor: 'pointer' }} />
        )}
        <Button variant={'outline'} borderColor={'orange'} color={'orange'} size={'sm'} ml={4}>
          Очистить
        </Button>
        <InputGroup w={'300px'} ml={'auto'}>
          <InputRightElement pointerEvents="none">
            <Search color="grey" size={20} />
          </InputRightElement>
          <Input size={'m'} />
        </InputGroup>
      </Flex>
      <Collapse
        in={isFilterActive}
        animateOpacity
        transition={{ exit: { delay: 0.2 }, enter: { duration: 1 } }}>
        <Box mt="4" rounded="md" shadow="md">
          <Flex alignItems={'center'} mb={6}>
            <Box mr={20}>
              <Text>Период</Text>
              <Flex alignItems={'center'}>
                <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" /> -
                <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" />
              </Flex>
            </Box>

            <Box w={'50%'}>
              <Text>Быстрый переход</Text>
              {quickTransition.map((el, id) => (
                <Button
                  key={id}
                  size={'sm'}
                  color={'orange'}
                  variant="outline"
                  mr={4}
                  borderColor={'orange'}>
                  {el}
                </Button>
              ))}
            </Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Flex flexDirection={'column'}>
              <Text mb={'8px'}>Статус заявки</Text>
              <div>
                <Button
                  size={'sm'}
                  leftIcon={<Hourglass name="hourglass" size={16} color="grey" />}
                  variant="outline"
                  mr={4}>
                  В обработке
                </Button>
                <Button
                  size={'sm'}
                  leftIcon={<CircleCheckBig name="ok" size={16} color="orange" />}
                  variant="outline"
                  mr={4}>
                  Обработана
                </Button>
                <Button
                  size={'sm'}
                  leftIcon={<X name="x" size={16} color="red" />}
                  variant="outline"
                  mr={4}>
                  Отклонена
                </Button>
              </div>
            </Flex>
            <Flex>
              <div style={{ marginRight: '20px' }}>
                <Text mb="8px">Налоговый период</Text>
                <Select size={'sm'}>
                  <option value="option1">Все</option>
                  <option value="option2">Месяц</option>
                  <option value="option3">Q1</option>
                  <option value="option4">Q2</option>
                  <option value="option5">Q3</option>
                  <option value="option6">Q4</option>
                  <option value="option6">Год</option>
                </Select>
              </div>
              <div style={{ marginRight: '20px' }}>
                <Text mb="8px">Вид документа</Text>
                <Select size={'sm'}>
                  <option value="option1">Все</option>
                  <option value="option2">Входящий</option>
                  <option value="option3">Исходящий</option>
                </Select>
              </div>
              <div style={{ marginRight: '20px' }}>
                <Text mb="8px">Название организации</Text>
                <Select size={'sm'}>
                  <option value="option1">Все</option>
                  <option value="option2">ООО ПЕГАС</option>
                  <option value="option3">Сабли и вилки </option>
                </Select>
              </div>
            </Flex>
          </Flex>
        </Box>
      </Collapse>
    </div>
  );
};

export default Filters;
