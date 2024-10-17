import { Link } from 'react-router-dom';
import ContainerWrapper from '../Container';
import s from './header.module.css';
import {
  ChevronDown,
  EditIcon,
  ExternalLinkIcon,
  LogOut,
  MenuIcon,
  PlusCircle,
  PlusCircleIcon,
  RepeatIcon,
  User,
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
  MenuGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';

function Header() {
  return (
    <>
      <header>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <nav>
            <ul className={s.navList}>
              <li>
                <Link to="/">Архив Документов</Link>
              </li>
              <li>
                <Link to="/application-archive">Архив заявок</Link>
              </li>
            </ul>
          </nav>
          <Flex alignItems={'center'}>
            <Menu>
              <ChevronDown />
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<UserRound size={20} />}
                variant="outline"
              />

              <MenuList>
                <MenuItem icon={<PlusCircleIcon />} command="⌘T">
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  Open File...
                </MenuItem>
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
