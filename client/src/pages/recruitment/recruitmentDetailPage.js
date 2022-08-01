import { useParams } from 'react-router-dom';
import RecruitmentContents from '../../components/recruitment/recruitmentContents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import Reviews from '../../share/review/reviews';

const RecrutmentDetailPage = () => {
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
        <Reviews exhibitionProject={exhibitionProject} apiUrl={'recruitment'} />
      </Box>
    </>
  );
};

export { RecrutmentDetailPage };
