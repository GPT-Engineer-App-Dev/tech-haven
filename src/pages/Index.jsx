import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for the latest and greatest in electronics.</Text>
          <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" />
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
          <HStack spacing={8} justifyContent="center">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;