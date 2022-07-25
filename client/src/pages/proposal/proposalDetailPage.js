import { useParams } from 'react-router-dom';
import { ProposalContents } from '../../components/proposal/proposalContents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ExhReviw from '../../share/review/exhReview';
import { Box } from '@mui/material';

function PropsalDetailPage() {
  const [exhibitionProject, setExhibitionProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/proposal/postId/${id}`)
      .then((res) => setExhibitionProject(res.data));
  }, []);

  return (
    <>
      <ProposalContents exhibitionProject={exhibitionProject} />
      <Box sx={{ width: '100%' }} className="displayTapBox">
        <ExhReviw exhibitionProject={exhibitionProject} />
      </Box>
    </>
  );
}

export { PropsalDetailPage };
