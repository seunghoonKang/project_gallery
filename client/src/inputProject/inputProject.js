import React, { useState } from 'react';

const InputProject = () => {
  const [inputs, setInputs] = useState({
    projectname: '',
    description: '',
  });
  const { projectname, description } = inputs;
  const onSubmithandler = () => {
    alert('작성 완료');
  };
  const onChangehandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <form onSubmit={onSubmithandler}>
      프로젝트
      <input
        name="projectname"
        placeholder="프로젝트 이름"
        onChange={onChangehandler}
        value={projectname}
      />
      <select>
        <option>C</option>
        <option>C++</option>
        <option>JAVA</option>
      </select>
      <textarea
        name="description"
        placeholder="내용을 입력하세요"
        onChange={onChangehandler}
        value={description}
      />
      <div>
        {projectname}
        {description}
      </div>
    </form>
  );
};

export default InputProject;
