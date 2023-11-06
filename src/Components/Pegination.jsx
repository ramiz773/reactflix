import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";

function Pegination({ page, totalPages }) {
   const { dispatch } = useContext(AppContext);

   const handlePreviousPage = () => {
      dispatch({ type: "PREVIOS_PAGE" });
   };

   const handleNextpage = () => {
      dispatch({ type: "NEXT_PAGE" });
   };

   return (
      <div className='pagination'>
         <button disabled={page <= 1} onClick={handlePreviousPage}>
            previous
         </button>
         <p>{`${page} of ${totalPages} `}</p>
         <button onClick={handleNextpage}>Next page</button>
      </div>
   );
}

export default Pegination;
