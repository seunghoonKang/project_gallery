import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Prism from 'prismjs';
import Loader from '@components/common/Loader';
import { postApi } from '@lib/api';
import { DetailViewer } from '@lib/DetailViewer';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import { MarkdownViewer } from '@lib/Markdown';
const TagLink = styled(Link) `
  text-decoration: none;
`;
const CodeToggle = styled.div `
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s ease all;
  margin: 0 auto;
  height: 24px;
  color: black;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
`;
const BodyBox = styled.div `
  margin-bottom: 40px;
`;
const TagBox = styled.div `
  display: flex;
  margin-bottom: 40px;
  margin-top: 20px;
  & a {
    margin-right: 10px;
    background-color: ${(props) => props.theme.palette.triconblack};
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
    line-height: 20px;
    text-align: center;
  }
`;
const Container = styled.div `
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
const DetailContainer = styled.div `
  width: 60%;
  @media screen and ${(props) => props.theme.devices.desktop}{

  }
  @media screen and ${(props) => props.theme.devices.mobile}{
    width: 90%;
  }

  & h2{
    margin: 20px 0;
  }
  & h4{
    margin: 5px;
    line-height: 20px;
  }
`;
function Title({ title }) {
    return (React.createElement("div", null,
        React.createElement("h1", null, title)));
}
function Tags({ categories }) {
    return (React.createElement(TagBox, null, categories.map((ct) => (React.createElement(TagLink, { key: ct._id, to: `/gallery?tag=${ct.category._id}` }, ct.category.name)))));
}
function Body({ description }) {
    return (React.createElement(BodyBox, null,
        React.createElement(MarkdownViewer, { text: description })));
}
function CodeViewer({ code }) {
    const [openState, setOpenState] = useState(false);
    function handleToggle() {
        setOpenState((cur) => !cur);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(CodeToggle, { onClick: handleToggle }, openState ? `${code.fileName} ▲` : `${code.fileName} ▼`),
        openState
            && (React.createElement(Viewer, { initialValue: `\`\`\`js ${code.fileData}\`\`\``, plugins: [[codeSyntaxHighlight, { highlighter: Prism }]] }))));
}
export default function Detail() {
    const [post, setPost] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [code, setCode] = useState([]);
    const { postId } = useParams();
    const getPostFromApi = async () => {
        try {
            const { data } = await postApi.getPostById(postId);
            const codes = await Promise.all(data.code.map(async ({ fileName, fileUrl }) => {
                const temp = await axios(fileUrl);
                return { fileName, fileData: temp.data };
            }));
            setCode(codes);
            setPost(data);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getPostFromApi();
    }, []);
    return isLoading ? (React.createElement(Loader, null)) : (React.createElement(Container, null,
        React.createElement(DetailContainer, null,
            React.createElement(Title, { title: post === null || post === void 0 ? void 0 : post.title }),
            React.createElement(Tags, { categories: post === null || post === void 0 ? void 0 : post.categories }),
            React.createElement(Body, { description: post === null || post === void 0 ? void 0 : post.description }),
            code.map((data) => React.createElement(CodeViewer, { code: data })),
            React.createElement(DetailViewer, { files: post === null || post === void 0 ? void 0 : post.code }))));
}