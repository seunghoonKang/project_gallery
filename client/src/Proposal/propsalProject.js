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

const PropsalProject = ({ projects }) => {
  const handleCardClick = () => {
    alert('누르면 넘어가게할거야');
  };
  {
    return projects.map((project, i) => {
      return (
        <CardHoverEffect>
          <Card
            key={i}
            classname="propsalCard"
            sx={{
              maxWidth: 350,
              p: 1,
              background: '#111827',
              color: 'white',
            }}
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
                url 바로가기
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
        </CardHoverEffect>
      );
    });
  }
};
const CardHoverEffect = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default PropsalProject;
