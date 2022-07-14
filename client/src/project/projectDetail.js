import ProjectCarousel from './projectCarousel';
import ProductContents from './ProductContents';
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
      <ProductContents />
    </>
  );
}

export { ProjectDetail };
