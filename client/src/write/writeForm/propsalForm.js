import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
import { writeApi } from '../../api/write/writeApi';

function ProposalForm() {
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

    const data = { title, description, tags };

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    writeApi.propsoalInputApi(data, headers).then((res) => {
      console.log(res);
    });
  }

  const titleRef = useRef('글제목'); // 돔의 위치를 알려준다.
  const descriptionRef = useRef('내용');
  const tagsRef = useRef('');
  return (
    <>
      <Form onSubmit={onSubmitHandling}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>글제목</Form.Label>

          <Form.Control
            type="text"
            required
            placeholder={titleRef.current}
            ref={titleRef}
          />
          <div style={{ maxWidth: '700px', margin: '2rem auto' }}></div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" required rows={3} ref={descriptionRef} />
        </Form.Group>
        <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
            multiple
            required
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

export { ProposalForm };
