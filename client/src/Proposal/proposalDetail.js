import { useParams } from 'react-router-dom';
import { ProjectDetail } from '../share/projectDetail';
import { useEffect, useState } from 'react';
import { exhibition } from '../api/exhibition/exhibitionProject';
import axios from 'axios';

function PropsalDetail() {
  const { id } = useParams();
  //const [project, setProject] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/exhibition/post/${id}`)
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <>
      <ProjectDetail />
    </>
  );
}

export { PropsalDetail };
