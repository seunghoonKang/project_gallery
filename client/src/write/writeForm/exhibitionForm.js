import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { Autocomplete, TextField, Stack, Button } from '@mui/material';
import { writeApi } from '../../api/write/writeApi';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function ExhibitionForm() {
  const [file, setFile] = useState([]);
  const [inputTags, setInputTags] = useState([]);
  const navigate = useNavigate();
  const tagsOption = [
    { tags: 'javaScript' },
    { tags: 'JAVA' },
    { tags: 'C' },
    { tags: ' C++' },
  ];

  console.log(inputTags);

  function onSubmitHandling(e) {
    //e.preventDefault();
    console.log(inputTags);
    const tagsArray = [];
    inputTags.map((tag, i) => {
      return tagsArray.push(tag.tags);
    });

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const tags = tagsArray;
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

    writeApi.exhibitionInputApi(data, headers).then((res) => {
      console.log(res);
    });

    navigate('/writemiddle');
  }

  const titleRef = useRef('글제목'); // 돔의 위치를 알려준다.
  const descriptionRef = useRef('내용');
  const urlRef = useRef('');
  const introRef = useRef('');

  return (
    <>
      <Section>
        <div
          style={{
            maxWidth: '800px',
            borderRadius: '10px',
            backgroundColor: '#3e383899',
            borderStyle: 'solid',
            borderColor: 'rgb(123, 120, 120)',
            padding: '10px',
          }}
        >
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
                multiple
                onChange={(e) => {
                  const currFile = e.target.files[0];
                  console.log(currFile);
                  setFile(currFile);
                }}
              />
              <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
              <Form.Label>프로젝트url</Form.Label>

              <Form.Control
                type="text"
                required
                placeholder={urlRef.current}
                ref={urlRef}
              />

              <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>한줄소개</Form.Label>
              <Form.Control required as="textarea" rows={2} ref={introRef} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={3}
                ref={descriptionRef}
              />
            </Form.Group>

            <Stack spacing={3} sx={{ width: '100%' }}>
              <Autocomplete
                multiple
                required
                style={{ backgroundColor: 'white' }}
                id="tags-standard"
                options={tagsOption}
                getOptionLabel={(option) => option.tags}
                defaultValue={[tagsOption[3]]}
                isOptionEqualToValue={(option, value) =>
                  option.tags === value.tags
                }
                onChange={(event, value) => {
                  setInputTags(value);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="태그를 추가해주세요"
                  />
                )}
              />
            </Stack>
            <SubmitButton type="submit">작성완료</SubmitButton>
          </Form>
        </div>
      </Section>
    </>
  );
}

export { ExhibitionForm };
const SubmitButton = styled(Button)`
  color: white;
  background-color: rgb(42, 53, 200);
  margin: auto;
  margin-top: 10px;
  margin-left: 270px;
  :hover {
    background-color: rgb(42, 180, 200);
    transition: 0.3s ease-in-out;
  }
`;

const Section = styled.section`
  background-color: #27262b;
  height: 100%;
`;
