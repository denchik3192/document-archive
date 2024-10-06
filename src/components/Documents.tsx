import { Box, Flex } from '@chakra-ui/react';
import s from './documents.module.css';
import React from 'react';
import { ArrowDownToLine, Eye, File } from 'lucide-react';

const Documents: React.FC = () => {
  return (
    <>
      <Box position={'relative'}>
        <Box mb={12}>
          <Flex>
            <span className={s.amountOfFiles}>10 файлов</span>
            <div className={s.arrow}>
              <ArrowDownToLine color="grey" />
            </div>
          </Flex>
          <Box
            mt={8}
            maxW={'140px'}
            minH={'150px'}
            cursor={'pointer'}
            _hover={{
              bg: '#d3d3d3',
              borderColor: 'black',
              '--transform-arrow-eye': 'translateY(-60px)',
            }}
            borderRadius={10}
            sx={{
              '--transform-arrow-eye': 'translateY(100%)',
              position: 'relative',
              overflow: 'hidden',
            }}>
            <Flex alignItems={'center'} justifyContent={'center'} height={'100%'}>
              <File size={200} color="grey" />
            </Flex>
            <Box
              p={2}
              size={40}
              bg={'white'}
              borderRadius={100}
              as={ArrowDownToLine}
              color="grey"
              position="absolute"
              bottom="0"
              _hover={{
                color: 'green',
              }}
              left="30%"
              transform="translateX(-50%) var(--transform-arrow-eye)"
              transition="transform 0.3s"
            />
            <Box
              p={2}
              size={40}
              bg={'white'}
              borderRadius={100}
              as={Eye}
              color="grey"
              position="absolute"
              bottom="0"
              _hover={{
                color: 'green',
              }}
              left="70%"
              transform="translateX(-50%) var(--transform-arrow-eye)"
              transition="transform 0.3s"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Documents;
