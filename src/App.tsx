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
import ApplicationForm from './components/ApplicationForm';
import ArchiveRecord from './components/ArchiveRecord';
import Archive from './pages/Archive';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      {/* <ArchiveRecord /> */}
      {/* <ContainerWrapper>
        <Heading>Архив документов</Heading>
      </ContainerWrapper> */}
      {/* <Archive /> */}

      {/* <ApplicationForm /> */}

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
