import { useState, useEffect } from 'react';
import './WritePage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import writeApi from '../api/exhibition/writeApi';

const editorConfiguration = {
  toolbar: ['bold', 'italic'],
};

function WritePage() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: '',
  });
  const [viewContent, setViewContent] = useState([]);
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //  axios.get('http://localhost:3000/api/exhibition/write').then((response)=> { //api/insert
  //    setViewContent(response.data);
  //  })
  // },[viewContent])
  // const submitReview = ()=>{
  /* axios.post('http://localhost:8000/api/exhibition/', {  //api/get
      title: 'test',
      nickName:'test',
      url: 'testUrl',
      tags: ['test'],
      description: 'test',
      images: 'test',
      intro: 'test',
      updateLog: 'test',
  }).then(()=>{
    alert('등록 완료!');
  })
};
*/
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      title: 'test2',
      nickName: 'test',
      url: 'testUrl',
      tags: ['test'],
      description: 'test',
      images: 'test',
      intro: 'test',
      updateLog: 'test',
    };
    writeApi.inputApi(body, token).then((res) => {
      alert('등록 완료');
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value,
    });
  };

  useEffect(() => console.log(2));

  console.log(1);
  console.log('CKEditor: ', CKEditor);
  return (
    <div className="App">
      <h1>글쓰기</h1>
      <div className="movie-container">
        {viewContent.map((element) => (
          <div>
            <h1>{element.title}</h1>
            <div>{element.content}</div>
          </div>
        ))}
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data,
            });
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          onError={() => console.log('Error')}
        />
      </div>
      <button className="submit-button" onClick={onSubmitHandler}>
        입력버튼
      </button>
    </div>
  );
}

export default WritePage;
