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

const Posts = ({ project }) => {
  const handleCardClick = () => {
    alert('누르면 넘어가게할거야');
  };
  return (
    <CardHoverEffect>
      {project.map((project, i) => {
        return (
          <Card
            sx={{ maxWidth: 350, p: 1, background: '#111827', color: 'white' }}
          >
            <CardMedia
              key={i}
              component="img"
              height="180"
              image={project.image}
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
                <hr />
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
              <Button
                size="small"
                textAlign="center"
                style={{
                  color: 'white',
                }}
              >
                공유하기
              </Button>
              <Button size="small" style={{ color: 'white' }}>
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
        );
      })}
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

export default Posts;
