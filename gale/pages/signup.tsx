import Head from 'next/head';
import { useForm, SubmitHandler, appendErrors } from 'react-hook-form';

interface userdata {
  name: string;
  email: string;
  id: string;
  pw: string;
}

export const Signup = () => {
  const { register, handleSubmit, setError } = useForm<userdata>();
  const onSubmit: SubmitHandler<userdata> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Login Test</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름</label>
        <input {...register('name', { required: true, max: 15 })} />
        <label>이메일</label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <label>아이디</label>
        <input {...register('id', { required: true })} />
        <label>비밀번호</label>
        <input
          type="password"
          {...register('pw', {
            required: true,
            min: 8,
            pattern:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
          })}
        />
        <input type="submit" />
      </form>
    </>
  );
};
