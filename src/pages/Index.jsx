import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4}>
        <HStack spacing={8}>
          <Heading size="md">ElectroShop</Heading>
          <Link href="/" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="/products" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
          <Link href="/about" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link href="/contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact Us</Link>
        </HStack>
        <Spacer />
        <Button colorScheme="teal" variant="outline">Sign In</Button>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/featured-product.jpg" alt="Featured Product" borderRadius="md" />
      </Box>

      {/* Product Listing Section */}
      <Container maxW="container.xl" py={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>High-quality electronic device</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Latest technology gadget</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Top-rated electronic item</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box>
              <Heading size="md" mb={4}>ElectroShop</Heading>
              <Text>Your one-stop shop for the latest electronics</Text>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
                <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
                <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
              </HStack>
            </Box>
            <Box>
              <Heading size="md" mb={4}>Legal</Heading>
              <Link href="/privacy" display="block" mb={2}>Privacy Policy</Link>
              <Link href="/terms" display="block">Terms of Service</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;