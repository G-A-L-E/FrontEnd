import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export default function LoginForm() {
    type HookFormTypes = {
        id: string;
        pw: string;
    }

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return res.data;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<HookFormTypes>();
    
    const { data , isLoading , isError } = useQuery('givemedata',getData);
    
    if(isLoading){
        return <h4>Loading...</h4>
    }
    if(isError){
        return <h5>something wrong</h5>
    }
    return (
        <form onSubmit={
            handleSubmit(async (loginData) => await console.log(loginData))
        }>
            <input
                {...register("id", {
                    required: true,
                    minLength: {
                        value: 8,
                        message: "아이디는 최소 8자 이상으로 입력하세요 !!"
                    },
                })}
                type="text"
                placeholder="ID"
            />
            <br />
            <span>
                {errors.id?.type === "required" && "아이디는 필수입니다"}
                {errors.id?.type === "minLength" && errors.id.message}
            </span>
            <br />
            <input
                {...register("pw", {
                    required: true,
                    minLength: {
                        value: 8,
                        message: "비밀번호는 최소 8자 이상으로 입력하세요 !!"
                    },
                    maxLength: {
                        value: 20,
                        message: "20자 이하로 입력하세요 !!"
                    }
                })}
                type="password"
                placeholder="PW"
            />
            <br />
            <span>
                {errors.pw?.type === "required" && "비밀번호는 필수입니다"}
                {errors.pw?.type === "minLength" && errors.pw?.message}
                {errors.pw?.type === "maxLength" && errors.pw?.message}
            </span>
            <br />
            <input type="submit" />
            {data.userId}
        </form>
    )
}
