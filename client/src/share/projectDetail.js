import ProjectCarousel from './projectDetail/projectCarousel';
import ProjectContents from './projectDetail/projectContents';

function ProjectDetail({ exhibitionProject }) {
  return (
    <>
      {exhibitionProject.images !== undefined ? (
        <ProjectCarousel exhibitionProject={exhibitionProject} />
      ) : null}
      {exhibitionProject.tags !== undefined ? (
        <ProjectContents exhibitionProject={exhibitionProject} />
      ) : null}
    </>
  );
}

export { ProjectDetail };
