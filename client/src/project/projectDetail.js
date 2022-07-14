import ProjectCarousel from './projectCarousel';
import ProjectContents from './projectContents';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #27262b;
`;

function ProjectDetail() {
  return (
    <>
      <ProjectCarousel />
      <ProjectContents />
    </>
  );
}

export { ProjectDetail };
