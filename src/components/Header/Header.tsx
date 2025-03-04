import { Link, useLocation } from 'react-router-dom';
import s from './header.module.css';
import {
  ArchiveIcon,
  FilesIcon,
  LogOut,
  Moon,
  PlusCircleIcon,
  SunDim,
  UserRound,
} from 'lucide-react';
import {
  Box,
  Flex,
  IconButton,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const pathName = useLocation().pathname.slice(1);
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    if (pathName === 'application-archive') setPageName('Архив заявок');
    if (pathName === '') setPageName('Архив документов');
    if (pathName === 'application-form') setPageName('Новая заявка');
  }, [pathName]);

  return (
    <>
      <header>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <motion.div
            key={pathName}
            initial={{ x: -500, opacity: 0 }} // Начальное состояние: сдвиг вверх и невидимость
            animate={{ x: 0, opacity: 1 }} // Конечное состояние: исходная позиция и полная видимость
            transition={{ duration: 0.6, ease: 'easeOut' }} // Параметры анимации
          >
            <Heading className={s.navName} size={'lg'}>
              {pageName}
            </Heading>
          </motion.div>

          <Flex alignItems={'center'}>
            <IconButton
              mr={2}
              onClick={toggleColorMode}
              // colorScheme="orange"
              variant={'outline'}
              aria-label="theme"
              size="sm"
              icon={colorMode === 'light' ? <Moon /> : <SunDim />}
            />
            <Menu>
              <MenuButton
                size={'sm'}
                as={IconButton}
                aria-label="Options"
                icon={<UserRound size={20} />}
                variant="outline"
              />

              <MenuList>
                <Link to="/application-form">
                  <MenuItem icon={<PlusCircleIcon color="grey" />}>Новая заявка</MenuItem>
                </Link>
                <Link to="/application-archive">
                  <MenuItem icon={<FilesIcon color="grey" />}>Архив заявок</MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem icon={<ArchiveIcon color="grey" />}>Архив документов</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Box mr={4} ml={4}>
              Denis
            </Box>
            <LogOut size={20} />
          </Flex>
        </Flex>
      </header>
    </>
  );
}

export default Header;
