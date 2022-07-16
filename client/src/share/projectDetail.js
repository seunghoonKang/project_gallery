import ProjectCarousel from './projectDetail/projectCarousel';
import ProjectContents from './projectDetail/projectContents';
import styled from 'styled-components';

function ProjectDetail({ exhibitionProject, id }) {
  console.log(id);
  return (
    <>
      <ProjectCarousel exhibitionProject={exhibitionProject} id={id} />
      <ProjectContents exhibitionProject={exhibitionProject} id={id} />
    </>
  );
}

export { ProjectDetail };
