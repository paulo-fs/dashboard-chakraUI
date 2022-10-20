import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ButtonProps {
   number: number;
   isCurrentPage?: boolean;
}

export function PaginationItem({ 
   number, isCurrentPage = false, ...rest 
} : PaginationItemProps) {
  if(isCurrentPage) {
      return (
         <Button
            size='sm'
            fontSize='xs'
            w='4'
            colorScheme='pink'
            disabled
            _disabled={{
               bgColor: 'pink.500',
               cursor: 'default',
            }}
            { ...rest }
         >
            { number }
         </Button>
      )
  }

  return (
      <Button
         size='sm'
         fontSize='xs'
         w='4'
         bg='gray.700'
         _hover={{
            bg: 'gray.500'
         }}
         { ...rest }
      >
         { number }
      </Button>
)
}
