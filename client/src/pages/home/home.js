import styled from 'styled-components';
import HomeCard from '../../components/home/homeCard';
import HomeUpper from '../../components/home/homeUpper';

const Home = () => {
  return (
    <Container>
      <HomeUpper />
      <HomeCard />
    </Container>
  );
};

const Container = styled.div`
  background-color: #27262b;
`;

export default Home;
