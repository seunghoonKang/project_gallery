import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
const StyledTagList = styled.div `
    position: absolute;
    width: 11.5rem;
    left: -13.5rem;
    margin-top: 2rem;

    & .title {
        font-size: 1rem;
        line-height: 1.5;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${(props) => props.theme.palette.triconblack};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.palette.triconblack};
        font-weight: bold;
    };

    & ul :not(:first-child) {
      margin-top: 0.25rem;
    };

    @media (max-width: 1200px) {
      display: none;
    };
`;
const Tag = styled.li `
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.triconblack};
  font-weight: bold;
  cursor: pointer;

  &.selected span {
    color: ${(props) => props.theme.palette.lobelia};
    font-weight: bold;
  }
`;
const StyledSpan = styled.span `
  margin-left: 0.5rem;
  color: ${(props) => props.theme.palette.daydream};
  font-weight: normal;

  :hover {
    text-decoration: underline;
  };
`;
function TagList({ tags }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target.closest('li');
        const id = target.dataset.id.split('taglist-')[1];
        if (id === 'all') {
            searchParams.delete('tag');
        }
        else if (id) {
            searchParams.set('tag', id);
        }
        setSearchParams(searchParams);
    };
    return (React.createElement(StyledTagList, { className: "TagList", onClick: handleClick },
        React.createElement("div", null,
            React.createElement("div", { className: "title" }, "\uD0DC\uADF8 \uBAA9\uB85D"),
            React.createElement("ul", null, tags.map(({ _id, name, post, selected, }) => (React.createElement(Tag, { key: _id, "data-id": `taglist-${_id}`, className: selected ? 'selected' : undefined },
                React.createElement(StyledSpan, null, `${name}(${post})`))))))));
}
export default TagList;
