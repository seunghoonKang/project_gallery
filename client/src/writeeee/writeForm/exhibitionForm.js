import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function ExhibitionForm() {
  const [file, setFile] = useState();
  const [inputTags, setInputTags] = useState([]);

  const tagsOption = [
    { tags: 'javaScript' },
    { tags: 'JAVA' },
    { tags: 'C' },
    { tags: ' C++' },
  ];

  function onSubmitHandling(e) {
    e.preventDefault();
    console.log(inputTags);

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const tags = tagsRef.current.value;
    const url = urlRef.current.value;
    const intro = introRef.current.value;

    const formData = new FormData();

    formData.append('image', file);
    console.log(file);

    const data = { title, description, tags, url, intro };
    console.log(data);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    // axios.post('/api/products', formData, { headers }).then((res) => {
    //   if (res.data.success) {
    //     console.log(res.data.success);
    //     alert('상품등록이 잘 되었습니다. ');
    //     //window.location.href= "/products"
    //   } else {
    //     alert('상품등록이 실패되었습니다.');
    //   }
    // });
  }

  const titleRef = useRef('글제목'); // 돔의 위치를 알려준다.
  const descriptionRef = useRef('내용');
  const urlRef = useRef('');
  const introRef = useRef('');
  const tagsRef = useRef('');
  //onSubmit={onSubmitHandling}
  return (
    <>
      <Form onSubmit={onSubmitHandling}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>글제목</Form.Label>

          <Form.Control
            type="text"
            placeholder={titleRef.current}
            ref={titleRef}
          />
          <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
          <Form.Label>사진</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/jpg"
            onChange={(e) => {
              const currFile = e.target.files[0];
              setFile(currFile);
            }}
          />
          <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
          <Form.Label>프로젝트url</Form.Label>

          <Form.Control type="text" placeholder={urlRef.current} ref={urlRef} />

          <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>한줄소개</Form.Label>
          <Form.Control as="textarea" rows={2} ref={introRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} ref={descriptionRef} />
        </Form.Group>
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            multiple
            style={{ backgroundColor: 'white' }}
            id="tags-standard"
            options={tagsOption}
            getOptionLabel={(option) => option.tags}
            defaultValue={[tagsOption[3]]}
            isOptionEqualToValue={(option, value) => option.tags === value.tags}
            onChange={(e) => {
              setInputTags(e.currentTarget.value);
              console.log(inputTags);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="standard" label="tags values" />
            )}
          />
        </Stack>
        <button type="submit">작성완료</button>
      </Form>
    </>
  );
}

export { ExhibitionForm };
