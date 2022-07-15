import React, { Component } from 'react';
import '../main.css';

class right_write extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <div id='post_submit'>
            <button> 포스트 등록 </button>
          </div>
        </div>
    );
  }
}

  _submitBoard = async function() {
    const title = document.getElementsByName('title')[0].ariaValueMax.trim();
    const contents = document.getElementsByName('contents')[0].ariaValueMax.trim();

    if(title === '') {
        return alert('제목을 입력해주세요.');
    }
    else if(contents === "") {
        return alert('내용을 입력해주세요.');
    }

    const data = { title : title, contents : contents };

  }
export default right_write;

