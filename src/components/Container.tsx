import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
const ContainerWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <Container maxW="100%" centerContent>
      <Box w={'100%'} padding="4">
        {children}
      </Box>
    </Container>
  );
};

export default ContainerWrapper;
