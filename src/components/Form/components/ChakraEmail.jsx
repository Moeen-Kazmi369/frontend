'use client'
import React from 'react'
import { Field } from 'formik';
import { Input,FormControl,FormLabel,FormErrorMessage } from '@chakra-ui/react';
const ChakraEmail = (props) => {
    const{label,name,...rest}=props;
  return (
    <Field name={name}>
        {(props) =>{ 
            const{field,form}=props
            return( 
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel htmlFor={name}>{label}</FormLabel>
                <Input name={name} id={name} {...field} {...rest} />
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
            )
        }
        }
    </Field>
  )
}

export default ChakraEmail;