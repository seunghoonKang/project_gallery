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
import { useState } from 'react';

const CardContents = () => {
  // const [page, setPage] = useState(1);

  const tags = ['C', 'C++', 'JAVA'].map((tag, index) => {
    return (
      <Chip
        key={index}
        label={tag}
        component="a"
        href="/"
        variant="outlined"
        clickable
        style={{ backgroundColor: 'white' }}
      />
    );
  });
  const handleCardClick = () => {
    alert('누르면 넘어가게할거야');
  };
  return (
    <CardHoverEffect>
      {' '}
      <Card sx={{ maxWidth: 350, p: 1, background: '#111827', color: 'white' }}>
        <CardMedia
          component="img"
          height="180"
          image="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg"
          alt="image"
          onClick={handleCardClick}
        />
        <CardContent onClick={handleCardClick}>
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
          <Button size="small" textAlign="center" variant="outlined">
            공유하기
          </Button>
          <Button size="small" variant="outlined">
            더 보기
          </Button>
        </CardActions>
        <Stack direction="row" spacing={1}>
          {tags}
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
