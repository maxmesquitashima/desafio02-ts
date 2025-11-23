import { Box, Flex, Heading } from "@chakra-ui/react";


export const Header = () => {
  return (
    <Box as="header" bg="orange" py={4} px={8} shadow="md" borderRadius='25px 25px'>
      <Flex align="center">
       
        <Heading as="h1" size="lg" color="white">
          Dio Bank
        </Heading>
      </Flex>
    </Box>
  );
};