import styled from 'styled-components';
import CardContent from './cardContents';

const Proposal = () => {
  return (
    <Section>
      <h2>제안</h2>
      <h5>다양한 아이디어를 제안합니다. </h5>
      <h5>이런 아이디어는 어떠신가요 ?!</h5>
      <Container>
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
        <CardContent />
      </Container>
    </Section>
  );
};

const Container = styled.div`
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 80%;
  margin: 100px auto auto auto;
`;

const Section = styled.section`
  /* width: 100%;
  height: 100%;
  padding: 32px 16px; */

  background-color: #27262b;
  & h2,
  h5 {
    color: white;
    text-align: center;
  }
`;

export default Proposal;
