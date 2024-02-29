import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaGlobeAmericas, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" m="auto" textAlign="center">
        <Flex as="header" position="fixed" top="0" w="100%" zIndex="sticky" bg={useColorModeValue("gray.100", "gray.900")} shadow="sm">
          <Container maxW="container.xl" p={0}>
            <Box pt={10} pb={10}>
              <Heading as="h1" size="2xl" fontWeight="bold">
                BlooLynk
              </Heading>
              <Text mt={3} fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
                Your Global Import & Export Partner
              </Text>
            </Box>
          </Container>
        </Flex>

        {/* Adjust padding to account for the fixed header */}
        <Box pt="100px" />

        {/* Content starts after header padding */}
        <Flex direction="column" align="center" m="auto" textAlign="center" pt="100px">
          {/* Hero Image */}
          <Box>
            <Image src="https://images.unsplash.com/photo-1700718008794-3db41f8d6c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzaGlwcGluZ3xlbnwwfHx8fDE3MDkxOTUwNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Global Shipping" boxSize="600px" objectFit="cover" />
          </Box>

          {/* About Section */}
          <VStack spacing={4} p={10} alignItems="flex-start">
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="md" color={useColorModeValue("gray.700", "gray.200")}>
              BlooLynk is dedicated to providing seamless import and export services across the globe. Leveraging a vast network of carriers, we offer a robust solution for businesses looking to expand their reach. Our expertise ensures that your goods arrive safely and on time, every time.
            </Text>
          </VStack>

          {/* Services Section */}
          <VStack spacing={4} p={10} alignItems="flex-start" bg={useColorModeValue("gray.50", "gray.800")} w="full">
            <Heading as="h2" size="xl">
              Our Services
            </Heading>
            <Text fontSize="md" color={useColorModeValue("gray.700", "gray.200")}>
              - International Freight Forwarding
              <br />
              - Customs Clearance
              <br />
              - Warehousing and Distribution
              <br />
              - Supply Chain Management
              <br />
              - Door-to-Door Delivery Services
              <br />
            </Text>
          </VStack>

          {/* Contact Section */}
          <VStack spacing={4} p={10} alignItems="flex-start">
            <Heading as="h2" size="xl">
              Get in Touch
            </Heading>
            <Stack direction="row" alignItems="center">
              <FaPhoneAlt />
              <Link href="tel:+1234567890" isExternal>
                +1 234 567 890
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center">
              <FaEnvelope />
              <Link href="mailto:contact@bloolynk.com" isExternal>
                contact@bloolynk.com
              </Link>
            </Stack>
            <Box>
              <Text fontSize="md" color={useColorModeValue("gray.700", "gray.200")}>
                Follow us:
              </Text>
              <Stack direction="row" spacing={6}>
                <Link href="https://facebook.com/bloolynk" isExternal>
                  <FaFacebook />
                </Link>
                <Link href="https://twitter.com/bloolynk" isExternal>
                  <FaTwitter />
                </Link>
                <Link href="https://linkedin.com/company/bloolynk" isExternal>
                  <FaLinkedin />
                </Link>
              </Stack>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
