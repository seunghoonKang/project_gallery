import {useState} from 'react';
import './WritePage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

function WritePage() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: '',
  })

 const [viewContent, setViewContent ] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3000/api/exhibition/write').then((response)=> { //api/insert
    setViewContent(response.data);
  })
 },[viewContent])

 const submitReview = ()=>{
  axios.post('http://localhost:3000/api/exhibition/write', {  //api/get
    title: movieContent.title,
    content: movieContent.title
  }).then(()=>{
    alert('등록 완료!');
  })
};

 const getValue = e => {
  const { name, value } = e.target;
  setMovieContent({
    ...movieContent,
    [name]: value
  })
 }

  return (
    <div className="App">
      <h1>글쓰기</h1>
      <div className='movie-container'>
        {viewContent.map(element =>
          <div>
            <h2>{element.title}</h2>
            <div>
              {element.content}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
      <input className="title-input"
	      type='text'
        placeholder='제목'
        onChange={getValue}
        name='title'
/>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button"
      onClick={submitReview}
      >입력</button>
    </div>
  );
}

export default WritePage;