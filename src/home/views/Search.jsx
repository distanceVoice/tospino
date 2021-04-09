import React, { Fragment } from "react";

const Search = function (props) {
  return (
    <Fragment>
      <div
        className="topic"
      >
        <a className="log">
          <img src={require("../../assets/img/logo@2x.png")} alt="" />
        </a>
        <div className="serch">
          <input type="text" placeholder={"请输入搜索关键词"} />
        </div>
        <div className="function">
          <a>
            <img src="../../img/home/" alt="" />
          </a>
          <a>
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
