import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeCard = () => {
  const navigate = useNavigate();
  return (
    <Cards>
      <Card border="dark" className="me-4" style={{ width: '20rem' }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          alt="img"
        />
        <Card.Body>
          <Card.Title>전시</Card.Title>
          <Card.Text>개인 프로젝트 구경하고가세요</Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('Exhibition');
            }}
          >
            전시 둘러보기
          </Button>
        </Card.Body>
      </Card>
      <Card border="dark" className="me-4" style={{ width: '20rem' }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          alt="img"
        />
        <Card.Body>
          <Card.Title>제안</Card.Title>
          <Card.Text>이런 프로젝트는 어떠세요?</Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('Proposal');
            }}
          >
            제안 둘러보기
          </Button>
        </Card.Body>
      </Card>
      <Card border="dark" style={{ width: '20rem' }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          alt="img"
        />
        <Card.Body>
          <Card.Title>모집</Card.Title>
          <Card.Text>함께할 동료를 모집합니다 !</Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('Recruitment');
            }}
          >
            모집 둘러보기
          </Button>
        </Card.Body>
      </Card>
    </Cards>
  );
};

const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export default HomeCard;
