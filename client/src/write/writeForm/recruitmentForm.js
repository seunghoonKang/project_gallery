import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { writeApi } from '../../api/write/writeApi';
function RecruitmentForm() {
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

    const data = { title, description };
    console.log(data);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    writeApi.recruitment(data, headers).then((res) => console.log(res));
  }

  const titleRef = useRef('글제목'); // 돔의 위치를 알려준다.
  const descriptionRef = useRef('내용');

  //onSubmit={onSubmitHandling}
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

        <button type="submit">작성완료</button>
      </Form>
    </>
  );
}

export { RecruitmentForm };
