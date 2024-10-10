import { Link } from 'react-router-dom';
import ContainerWrapper from '../Container';
import s from './header.module.css';
import { LogOut, User, UserRound } from 'lucide-react';
import { Box, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <>
      <header>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <nav>
            <ul className={s.navList}>
              {/* <li>
                <Link to="/">Архив Документов</Link>
              </li>
              <li>
                <Link to="/application-archive">Архив заявок</Link>
              </li> */}
            </ul>
          </nav>
          <Flex alignItems={'center'}>
            <UserRound size={20} />
            <Box mr={4} ml={4}>
              Admin
            </Box>
            <LogOut size={20} />
          </Flex>
        </Flex>
      </header>
    </>
  );
}

export default Header;
