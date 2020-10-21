import React from "react";

import "./filter-style.scss";

interface IProps {
  value: string;
  handleChange: any;
}

const Filter = (props: IProps) => (
  <div className="filter-container">
    Search: <input value={props.value} onChange={props.handleChange} />
  </div>
);

export default Filter;
