import styled from 'styled-components';
import CardContent from './cardContents';
import PaginationContents from './paginationContents';
import WriteComp from './writeComponent';
const Proposal = () => {
  return (
    <Section>
      <h2>제안</h2>
      <h5>다양한 아이디어를 제안합니다. </h5>
      <h5>이런 아이디어는 어떠신가요 ?!</h5>
      <PaginationContents />
      <WriteComp />
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
  border-top: 1px solid white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  width: 80%;
  margin: 75px auto auto auto;
  padding-top: 20px;
`;

const Section = styled.section`
  background-color: #27262b;
  margin-top: 30px;
  & h2,
  h5 {
    color: white;
    text-align: center;
  }
`;

export default Proposal;
