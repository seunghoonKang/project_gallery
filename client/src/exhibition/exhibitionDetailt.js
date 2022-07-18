import { ProjectDetail } from '../share/projectDetail';
import ExhibitionTap from './exhibitionTap';
import { useParams } from 'react-router-dom';

function ExhibitionDetail({ exhibitionProject }) {
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} id={id} />
      <ExhibitionTap exhibitionProject={exhibitionProject} id={id} />
    </>
  );
}

export { ExhibitionDetail };
