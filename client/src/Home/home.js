import styled from 'styled-components';
import HomeCard from './homeCard'
import HomeNav from './homenav';
import HomeUpper from './homeUpper';

const Home = () => {
return(
  <Container>
    <HomeNav />
    <HomeUpper />
    <HomeCard />
    <footer></footer>
  </Container>
)
}


const Container = styled.div`
  background-color: #27262b;
`


export default Home;