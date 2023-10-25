import React from "react";

function Pegination({ page, setPage, totalPages }) {
  const handlePreviousPage = () => {
    setPage((previosPage) => previosPage - 1);
  };

  const handleNextpage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={handlePreviousPage}>
        previous
      </button>
      <p>{`${page} of ${totalPages} `}</p>
      <button onClick={handleNextpage}>Next page</button>
    </div>
  );
}

export default Pegination;
