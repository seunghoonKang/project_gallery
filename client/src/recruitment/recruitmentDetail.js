import { useParams } from 'react-router-dom';
import RecruitmentContents from './recruitmentContents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import ExhReviw from '../exhibition/exhReviw';

const RecrutmentDetail = () => {
  const [exhibitionProject, setExhibitionProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/recruitment/postId/${id}`)
      .then((res) => setExhibitionProject(res.data));
  }, []);
  return (
    <>
      <RecruitmentContents exhibitionProject={exhibitionProject} />
      <Box sx={{ width: '100%' }} className="displayTapBox">
        <ExhReviw exhibitionProject={exhibitionProject} />
      </Box>
    </>
  );
};

export { RecrutmentDetail };
