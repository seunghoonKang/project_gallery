import styled from 'styled-components';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const WriteComp = () => {
  return (
    <Button>
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
