import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const CardContents = () => {
  const handleCardClick = () => {
    alert('누르면 넘어가게할거야');
  };
  return (
    <CardHoverEffect onClick={handleCardClick}>
      {' '}
      <Card sx={{ maxWidth: 300, p: 1, background: '#111827', color: 'white' }}>
        <CardMedia
          component="img"
          height="180"
          image="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          alt="image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            제목
          </Typography>
          <div style={{ width: 200, height: 30, whiteSpace: 'nowrap' }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                color: 'white',
              }}
            >
              내용이 들어갑니다. 이런저런 두런두런ㅇㅁㄴㅁㅇㄴㅁㄴㅇㅇㅁㄴ
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" textAlign="center">
            공유하기
          </Button>
          <Button size="small">더 보기</Button>
        </CardActions>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Clickable Link"
            component="a"
            href="#basic-chip"
            variant="outlined"
            clickable
            style={{ backgroundColor: 'white' }}
          />
        </Stack>
      </Card>
    </CardHoverEffect>
  );
};

const CardHoverEffect = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default CardContents;
