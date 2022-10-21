import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

const createUserFormSchema = yup.object().shape({
   name: yup.string().required('Nome obrigatório'),
   email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
   password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
   passwordConfirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
 })

export default function CreateUser() {
   const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(createUserFormSchema)
    });
    const { errors } = formState

    const handleCreateUser: SubmitHandler<FieldValues> = async(values) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(values)
    }

   return (
      <Box>
         <Header />

         <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
            <Sidebar />

            <Box as='form' onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
               <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
               <Divider my='6' borderColor='gray.700' />

               <VStack spacing='8'>
                  <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                     <Input label='Nome completo' type='text'
                        {...register('name')}
                        error={errors.name}
                     />
                     <Input label='E-mail' type='email'
                        {...register('email')}
                        error={errors.email}
                     />
                  </SimpleGrid>

                  <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                     <Input label='Senha' type='password' 
                        {...register('password')}
                        error={errors.password}
                     />
                     <Input label='Confirme sua senha' type='password' 
                        {...register('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                     />
                  </SimpleGrid>
               </VStack>

               <Flex mt='8' justify='flex-end'>
                  <HStack spacing='4'>
                     <Link href='/users'>
                        <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                     </Link>
                     <Button
                       colorScheme='pink'
                       isLoading={formState.isSubmitting}
                       type='submit'
                     >
                        Salvar
                     </Button>
                  </HStack>
               </Flex>
            </Box>
         </Flex>
      </Box>
   )
}