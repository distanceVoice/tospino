import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from "./router"
import './assets/css/test.less'
class App extends React.Component {
    render(){
        return (
            <div style={{color:"#333"}} className="test test2">
                <AppRouter />
            </div>
    )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))
