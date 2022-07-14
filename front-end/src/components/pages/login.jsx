import { Formik, Field } from "formik";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import AlertMessage from "../functions/alert";
import Service from "../service/service";

export default function Login() {
  return (
    <ChakraProvider>
      <Flex
        bg="rgba(39, 42, 51, 0.95)"
        align="center"
        justify="center"
        h="100vh"
      >
        <Box bg="#23252d" p={6} rounded="md" w={64}>
          <Formik
            bg="#23252d"
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values) => {
              try {
                const requestToLogin = await Service("login", values);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel color="white" htmlFor="text">
                      Логин
                    </FormLabel>
                    <Field
                      as={Input}
                      bg="white"
                      id="username"
                      name="username"
                      type="text"
                      // variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel color="white" htmlFor="password">
                      Пароль
                    </FormLabel>
                    <Field
                      as={Input}
                      bg="white"
                      id="password"
                      name="password"
                      type="password"
                      // variant="filled"
                      validate={(value) => {
                        let error;

                        if (value.length < 3) {
                          error = "Password must contain at least 3 characters";
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="orange" width="full">
                    Войти
                  </Button>
                  <a href="/registration">
                    <Button colorScheme="blue" width="full">
                      Регистрация
                    </Button>
                  </a>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
