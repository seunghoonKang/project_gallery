import styled from 'styled-components';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useNavigate } from 'react-router-dom';

const WriteComp = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('write')}>
      <BorderColorIcon />
    </Button>
  );
};

const Button = styled.button`
  border-radius: 5px;
  width: 50px;
  height: 40px;
  color: white;
  background-color: rgb(42, 53, 200);
  border: none;
  float: right;
  margin-right: 10vw;
  :hover {
  }
`;

export default WriteComp;
