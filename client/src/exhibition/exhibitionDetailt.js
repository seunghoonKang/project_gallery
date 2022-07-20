import { ProjectDetail } from '../share/projectDetail';
import ExhibitionTap from './exhibitionTap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExhibitionDetail() {
  const { id } = useParams();
  console.log(id);
  console.log('!!!!!!!!!!!!');
  const [exhibitionProject, setExhibitionProject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/exhibition/post/${id}`).then((res) => {
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

export { ExhibitionDetail };
