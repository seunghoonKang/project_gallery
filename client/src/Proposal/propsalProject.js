import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();

  return projects.map((project, i) => {
    return (
      <CardHoverEffect key={i}>
        <Card
          key={i}
          className="propsalCard"
          sx={{
            maxWidth: 350,
            p: 1,
            background: '#111827',
            color: 'white',
          }}
        >
          <CardContent
            onClick={() => {
              navigate(`/proposalDetail/${project._id}`);
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textalign="center"
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
                {project.description}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              textalign="center"
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
};
const CardHoverEffect = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export default PropsalProject;
