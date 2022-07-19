import { FC, memo } from 'react';
import { Box, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map((value, index, array) => (
        <WrapItem key={index}>
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: 'pointer', opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
                alt="profile image"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                jakee
              </Text>
              <Text fontStyle="sm" color="gray">
                okada
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
});
