import { ProjectDetail } from '../share/projectDetail';
import ExhibitionTap from './exhibitionTap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExhibitionDetailPage() {
  const { id } = useParams();
  const [exhibitionProject, setExhibitionProject] = useState({});
  useEffect(() => {
    axios.get(`/api/exhibition/postId/${id}`).then((res) => {
      setExhibitionProject(res.data);
    });
  }, []);

  console.log(exhibitionProject);
  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} />
      <ExhibitionTap exhibitionProject={exhibitionProject} />
    </>
  );
}

export { ExhibitionDetailPage };
