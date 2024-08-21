import React from "react";
import { useSearchParams} from "react-router-dom";


const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const currentFilter = searchParams.get("filter")


  const handleBtn = (page) => {
    if (page >= 1) {
      setSearchParams({filter: currentFilter, page: page.toString()});
    }
  }


    return (
      <div>
      <button onClick={() => handleBtn(currentPage - 1)} disabled={currentPage===1}>Prev</button>
      <button onClick={() => handleBtn(currentPage + 1)}>Next</button>
      <p>Page: {currentPage}</p>
    </div>
    )
}

export default Pagination