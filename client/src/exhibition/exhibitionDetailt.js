import { ProjectDetail } from '../share/projectDetail';
import ExhibitionTap from './exhibitionTap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { exhibition } from '../api/exhibition/exhibitionProject';

function ExhibitionDetail() {
  const { id } = useParams();
  const [exhibitionProject, setExhibitionProject] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/exhibition/postId/${id}`)
      .then((res) => {
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
