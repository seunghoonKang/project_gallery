import ProjectCarousel from '../share/projectDetail/projectCarousel';
import ProjectContents from '../share/projectDetail/projectContents';

function ProjectDetail({ exhibitionProject }) {
  console.log('hi');
  console.log(exhibitionProject);
  return (
    <>
      <ProjectCarousel exhibitionProject={exhibitionProject} />
      <ProjectContents exhibitionProject={exhibitionProject} />
    </>
  );
}

export { ProjectDetail };
