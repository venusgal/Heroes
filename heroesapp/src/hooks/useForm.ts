import { ChangeEvent, useState } from "react";

interface FormValues{
    [key:string]: string | number;
}

export const useForm=<T extends FormValues>(initialValues: T)=>{
    const [values, setVAlues]= useState<T>(initialValues);

    const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const {value, name}= event.target;
        setVAlues({...values, [`${name}`]: value});
    };
    const resetForm=()=>{
        setVAlues(initialValues);
    };
    return{
        values,
        handleChange,
        resetForm,
    };
};