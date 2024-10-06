import { Button, Flex, Text, Stack } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button onClick={() => onPageChange(currentPage - 1)} isDisabled={currentPage === 1}>
        <ChevronLeft />
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          variant={currentPage === index + 1 ? 'solid' : 'outline'}>
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => onPageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
        <ChevronRight />
      </Button>
    </Stack>
  );
};

export default Pagination;
