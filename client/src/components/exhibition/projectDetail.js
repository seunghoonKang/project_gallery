import ProjectCarousel from './ProjectDetail/projectCarousel';
import ProjectContents from './ProjectDetail/projectContents';

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
