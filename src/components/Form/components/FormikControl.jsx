import React from 'react'
import TextArea from './TextArea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckBoxes from './CheckBoxes';
import Datepicker from './DatePicker';
import Email from './Email';
import ChakraEmail from './ChakraEmail';
const FormikControl = (props) => {
    const {control,...rest} = props;
    // console.log(control);
    switch (control) {
        case 'email':
            return <Email {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <RadioButtons {...rest}/>
        case 'checkbox':
            return <CheckBoxes {...rest}/>
        case 'date':
            return <Datepicker {...rest}/>
        case 'chakraEmail':
            return <ChakraEmail {...rest}/>
        default:
            return null
    }
}

export default FormikControl;