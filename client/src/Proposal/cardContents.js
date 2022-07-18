import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import styled from 'styled-components';

const CardContents = ({ projects }) => {
  // const [page, setPage] = useState(1);
  const handleCardClick = () => {
    alert('누르면 넘어가게할거야');
  };
  return projects.map((project, index) => {
    <CardHoverEffect>
      {' '}
      <Card sx={{ maxWidth: 350, p: 1, background: '#111827', color: 'white' }}>
        <CardMedia
          key={index}
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
            {project.title}
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
              {project.contents}
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
          {project.tags.map((tag, i) => {
            return (
              <Chip
                key={i}
                label={tag}
                component="a"
                href="/"
                variant="outlined"
                clickable
                style={{ backgroundColor: 'gray' }}
              />
            );
          })}
        </Stack>
      </Card>
    </CardHoverEffect>;
  });
};

const CardHoverEffect = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default CardContents;
