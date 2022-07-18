import Pagination from 'react-js-pagination';
import './paginationContents.css';

const PaginationContents = ({
  project,
  postsPerPage,
  paginate,
  currentPage,
}) => {
  return (
    <Pagination
      activePage={currentPage} //현재 페이지
      itemsCountPerPage={postsPerPage} // 한 페이지에 몇 개의 아이템(카드)을 보여줄거야?.
      totalItemsCount={project.length} //총 아이템(카드) 수.
      pageRangeDisplayed={Math.ceil(project.length / postsPerPage)} //페이지네이터가 보여줄 페이지 범위
      prevPageText={'이전'} // 이전 버튼
      nextPageText={'다음'} // 이후 버튼
      onChange={paginate} //페이지 바뀔 때 핸들링함수.
    />
  );
};

export default PaginationContents;
