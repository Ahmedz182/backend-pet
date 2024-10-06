import React from "react";
import { useNavigate } from 'react-router-dom';

const ViewFullDetail = ({id}) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button className="bg-green rounded-xl px-5 py-2 text-black font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95 mb-4" onClick={()=>{
 navigate(`/pet-detail/${id}`);
        }}>
          <i className="text-darkBlue   ri-book-open-line me-1"></i>{" "}
          <span className="text-darkBlue  sm:text-sm ">View Full Detail</span>
        </button>
      </div>
    </>
  );
};

export default ViewFullDetail;
