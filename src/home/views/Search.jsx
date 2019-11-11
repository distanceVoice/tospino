import React, { Fragment } from 'react'

const Search = function (props) {
    return (
        <Fragment>
            <div style={{width: '100%',padding: '0 15px',boxSizing: 'border-box'}}>
                <a><img src={require("../../assets/img/logo@2x.png")} alt=""/></a>
                <div className="dib f1">
                    <input type="text" placeholder={'请输入搜索关键词'}/>
                </div>
                <div className="dib">
                    <a><img src="../../img/home/" alt=""/></a>
                    <a><img src="" alt=""/></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Search
