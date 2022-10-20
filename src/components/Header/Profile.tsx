import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
   showProfileData?: boolean | undefined;
}

export function Profile({ showProfileData = true } : ProfileProps) {
  return (
   <Flex
   align='center'
   >
      { showProfileData && 
         <Box mr='4' textAlign='right'>
            <Text>Paulo Souza</Text>
            <Text color='gray.300' fontSize='small'>
               paulo@mail.com
            </Text>
         </Box>
      }

      <Avatar size='md' name='Paulo Souza' />
   </Flex>
  )
}