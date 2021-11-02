import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { getHome } from './services';

const Home: React.FC = () => {

  const jsonPlacholder = async () => {
    const data = await getHome();

    console.log(data);
  }

  useEffect(() => {
    jsonPlacholder()
  })

  const dispatch = useDispatch()
  const error = useSelector((state: ApplicationState) => state.home.error)
  
  return (
    <>
      <p onClick={() => dispatch({ type: 'Home_Test_Redux' })}>Home</p>
    </>
  );
};

export default Home;
