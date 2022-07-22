import styled from 'styled-components';

const HomeUpper = () => {
  return (
    <UpperPart>
      <h1>Welcome our Gallery</h1>
    </UpperPart>
  );
};

const UpperPart = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://cdn.pixabay.com/photo/2016/12/15/07/54/horseshoe-bend-1908283_1280.jpg);
  background-size: cover;

  & h1 {
    text-align: center;
    font-size: 8rem;
    padding: 20vw;
    color: white;
  }
`;

export default HomeUpper;
