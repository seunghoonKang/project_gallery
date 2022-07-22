import styled from 'styled-components';

const HomeUpper = () => {
  return <UpperPart></UpperPart>;
};

const UpperPart = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://elice-pg-s3-bucket.s3.ap-northeast-2.amazonaws.com/eric-park-QbX8A8eHfzw-unsplash.jpg);
  background-size: cover;

  & h1 {
    text-align: center;
    font-size: 8rem;
    padding: 20vw;
    color: white;
  }
`;

export default HomeUpper;
