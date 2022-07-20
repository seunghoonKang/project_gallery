import { useParams } from 'react-router-dom';
import { ProjectDetail } from '../share/projectDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PropsalDetail() {
  const [proposalContent, setProposalContent] = useState({});
  const { id } = useParams();
  //const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/exhibition/postId/${id}`)
      .then((res) => setProposalContent(res.data));
  }, []);

  return (
    <>
      <ProjectDetail />
    </>
  );
}

export { PropsalDetail };
