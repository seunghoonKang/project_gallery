import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeCard = () => {
  const navigate = useNavigate();
  return (
    <Cards>
      <Card
        border="dark"
        className="me-4"
        style={{ width: '20rem', border: 'none' }}
      >
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img"
        />
        <Card.Body style={{ background: 'gray' }}>
          <Card.Title style={{ color: 'white' }}>전시</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            개인 프로젝트 구경하고가세요
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('exhibitionList');
            }}
          >
            전시 둘러보기
          </Button>
        </Card.Body>
      </Card>
      <Card
        border="dark"
        className="me-4"
        style={{ width: '20rem', border: 'none' }}
      >
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="img"
        />
        <Card.Body style={{ background: 'gray' }}>
          <Card.Title style={{ color: 'white' }}>제안</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            이런 프로젝트는 어떠세요?
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('proposalList');
            }}
          >
            제안 둘러보기
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', border: 'none' }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1542107617-e760dc92dcdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="img"
        />
        <Card.Body style={{ background: 'gray' }}>
          <Card.Title style={{ color: 'white' }}>팀원모집</Card.Title>
          <Card.Text style={{ color: 'white' }}>
            함께할 동료를 모집합니다 !
          </Card.Text>
          <Button
            variant="secondary"
            onClick={() => {
              navigate('recruitmentList');
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
