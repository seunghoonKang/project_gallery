import ProjectCarousel from './projectDetail/projectCarousel';
import ProjectContents from './projectDetail/projectContents';

function ProjectDetail({ exhibitionProject }) {
  console.log(exhibitionProject);
  return (
    <>
      <ProjectCarousel exhibitionProject={exhibitionProject} />
      <ProjectContents exhibitionProject={exhibitionProject} />
    </>
  );
}

export { ProjectDetail };
