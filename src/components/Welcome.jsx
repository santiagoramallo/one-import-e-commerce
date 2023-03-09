import { Center, Box, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://i.pinimg.com/564x/ed/0b/21/ed0b21abb5c0d7a256ca1fe7ef3f4b4e.jpg"
            alt="lentes"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;
