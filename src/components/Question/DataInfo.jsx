import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const DataInfo = ({ props }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={show ? "post-card-open" : "post-card"}
      onClick={() => setShow(!show)}
    >
      <div className="collapse-option">
        <h6>{props.title}</h6>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">{show ? <p>{props.body}</p> : null}</div>
    </div>
  );
};

export default DataInfo;
