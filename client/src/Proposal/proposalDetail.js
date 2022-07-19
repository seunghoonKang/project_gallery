import { ProjectDetail } from '../share/projectDetail';

function PropsalDetail({ exhibitionProject }) {
  console.log(exhibitionProject);
  return (
    <>
      <ProjectDetail exhibitionProject={exhibitionProject} />
    </>
  );
}

export { PropsalDetail };
