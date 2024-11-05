import { ChevronDown, ChevronUp, CircleCheckBig, Gauge, Hourglass, Search, X } from 'lucide-react';
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
  const [activeStatus, setActiveStatus] = useState<number | null>(null);
  const [activeTransitionButton, setActiveTransitionButton] = useState<number | null>(null);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(true);
  const statusButtons = [
    {
      label: 'В обработке',
      icon: <Hourglass size={16} color="grey" />,
      id: 1,
    },
    {
      label: 'Обработана',
      icon: <CircleCheckBig size={16} color="orange" />,
      id: 2,
    },
    {
      label: 'Отклонена',
      icon: <X size={16} color="red" />,
      id: 3,
    },
  ];
  const quickTransition = [
    {
      label: 'Сегодня',
      id: 1,
    },
    {
      label: 'Неделя',
      id: 2,
    },
    {
      label: 'Месяц',
      id: 3,
    },
  ];

  const resetFilters = () => {
    setActiveStatus(null);
    setActiveTransitionButton(null);
  };

  return (
    <div style={{ width: '100%' }}>
      <Flex alignItems={'center'}>
        <Flex onClick={() => setIsFilterActive(!isFilterActive)}>
          <Heading size={'m'} color={'orange'} mr={2} cursor={'pointer'}>
            Фильтр
          </Heading>
          {isFilterActive ? (
            <ChevronUp color={'orange'} style={{ cursor: 'pointer' }} />
          ) : (
            <ChevronDown color={'orange'} style={{ cursor: 'pointer' }} />
          )}
        </Flex>

        <Button
          onClick={resetFilters}
          variant={'outline'}
          borderColor={'orange'}
          color={'orange'}
          size={'sm'}
          ml={4}>
          Очистить
        </Button>
        <InputGroup w={'300px'} ml={'auto'} size={'sm'}>
          <InputRightElement pointerEvents="none">
            <Search color="grey" size={20} />
          </InputRightElement>
          <Input placeholder="Поиск" />
        </InputGroup>
      </Flex>
      <Collapse
        in={isFilterActive}
        animateOpacity
        transition={{ exit: { delay: 0.2 }, enter: { duration: 1 } }}>
        <Box mt="2" rounded="md" shadow="md">
          <Flex alignItems={'center'} mb={4}>
            <Box mr={20}>
              <Text mb={2}>Период</Text>
              <Flex alignItems={'center'}>
                <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" /> -
                <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" />
              </Flex>
            </Box>

            <Box w={'50%'}>
              <Text mb={2}>Быстрый переход</Text>

              {quickTransition.map((el) => (
                <Button
                  key={el.id}
                  onClick={() => setActiveTransitionButton(el.id)}
                  size={'sm'}
                  color={activeTransitionButton === el.id ? 'orange' : 'white'}
                  variant={activeTransitionButton === el.id ? 'outline' : 'solid'}
                  // colorScheme={activeTransitionButton === el.id ? 'orange' : undefined}
                  mr={4}
                  borderColor={'orange'}>
                  {el.label}
                </Button>
              ))}
            </Box>
          </Flex>
          <Flex alignItems={'center'}>
            <Flex flexDirection={'column'}>
              <Text mb={'8px'}>Статус заявки</Text>
              <div>
                {statusButtons.map((button) => (
                  <Button
                    key={button.id}
                    onClick={() => setActiveStatus(button.id)}
                    size="sm"
                    leftIcon={button.icon}
                    variant={activeStatus === button.id ? 'solid' : 'outline'}
                    colorScheme={activeStatus === button.id ? 'blue' : undefined}
                    mr={4}>
                    {button.label}
                  </Button>
                ))}
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
