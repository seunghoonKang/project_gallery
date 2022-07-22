import styled from 'styled-components';
import HomeCard from './homeCard';
import HomeUpper from './homeUpper';

const Home = () => {
  return (
    <Container>
      <HomeUpper />
      <HomeCard />
      <footer></footer>
    </Container>
  );
};


const Container = styled.div`
  background-color: #27262b;
`;

export default Home;
