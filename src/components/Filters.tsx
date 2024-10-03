import { ChevronDown, CircleCheckBig, Hourglass, X } from 'lucide-react';
import { Flex, Select, Button, Input, Text, Box, Heading } from '@chakra-ui/react';
const Filters: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Flex alignItems={'center'}>
        <Heading size={'m'} color={'orange'} mr={2}>
          Фильтры
        </Heading>
        <ChevronDown color={'orange'} style={{ cursor: 'pointer' }} />
        <Button variant={'outline'} borderColor={'orange'} color={'orange'} size={'sm'} ml={4}>
          Очистить
        </Button>
      </Flex>

      <Flex alignItems={'center'} mb={6}>
        <Box mr={20}>
          <Text>Период</Text>
          <Flex alignItems={'center'}>
            <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" />-
            <Input maxW={'200px'} placeholder="Select Date" size="sm" type="date" />
          </Flex>
        </Box>

        <Box w={'50%'}>
          <Text>Быстрый переход</Text>
          <Flex></Flex>
          <Button size={'sm'} colorScheme="orange" variant="outline" mr={4}>
            Сегодня
          </Button>
          <Button size={'sm'} colorScheme="orange" variant="outline" mr={4}>
            Неделя
          </Button>
          <Button size={'sm'} colorScheme="orange" variant="outline" mr={4}>
            месяц
          </Button>
        </Box>
      </Flex>
      <Flex alignItems={'center'}>
        <Flex flexDirection={'column'}>
          <Text mb={'8px'}>Статус заявки</Text>
          <div>
            <Button
              size={'sm'}
              leftIcon={<Hourglass name="hourglass" size={16} color="grey" />}
              colorScheme="teal"
              variant="outline"
              mr={4}>
              В обработке
            </Button>
            <Button
              size={'sm'}
              leftIcon={<CircleCheckBig name="ok" size={16} color="orange" />}
              colorScheme="teal"
              variant="outline"
              mr={4}>
              Обработана
            </Button>
            <Button
              size={'sm'}
              leftIcon={<X name="x" size={16} color="red" />}
              colorScheme="teal"
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
              <option value="option1">1Q</option>
              <option value="option2">2Q</option>
              <option value="option3">3Q</option>
            </Select>
          </div>
          <div style={{ marginRight: '20px' }}>
            <Text mb="8px">Вид документа</Text>
            <Select size={'sm'}>
              <option value="option1">1Q</option>
              <option value="option2">2Q</option>
              <option value="option3">3Q</option>
            </Select>
          </div>
          <div style={{ marginRight: '20px' }}>
            <Text mb="8px">Название организации</Text>
            <Select size={'sm'}>
              <option value="option1">1Q</option>
              <option value="option2">2Q</option>
              <option value="option3">3Q</option>
            </Select>
          </div>
        </Flex>
      </Flex>

      {/* </Flex> */}
    </div>
  );
};

export default Filters;
