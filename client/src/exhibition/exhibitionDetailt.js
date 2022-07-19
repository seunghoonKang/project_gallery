import { ProjectDetail } from '../share/projectDetail';
import ExhibitionTap from './exhibitionTap';

function ExhibitionDetail({ exhibitionProject }) {
  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} />
      <ExhibitionTap exhibitionProject={exhibitionProject} />
    </>
  );
}

export { ExhibitionDetail };
