import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './paginationContents.css';

const PaginationContents = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page} //현재 페이지
      itemsCountPerPage={12} // 한 페이지에 몇 개의 아이템(카드)을 보여줄거야?. 일단 12개로 생각해봄
      totalItemsCount={500} //총 아이템(카드) 수. api후 props {count} 로 받자
      pageRangeDisplayed={5} //페이지네이터 내에서 보여줄 페이지의 범위
      prevPageText={'<'} // 이전 버튼
      nextPageText={'>'} // 이후 버튼
      onChange={handlePageChange} //페이지 바뀔 때 핸들링함수. props {setPage}로 받고,
    />
  );
};

export default PaginationContents;
