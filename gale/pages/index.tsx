import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Signup } from './signup';

const Home: NextPage = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default Home;
