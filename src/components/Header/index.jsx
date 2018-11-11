import React from 'react';
import './index.scss'
// import './index1.scss'

export default class Header extends React.Component {
    constructor (props){
        super(props)
    }
    render (){
        return (
            <>
                <h1>Hello World! from {this.props.author}</h1>
                <h2>master here</h2>
                <h2>test here</h2>
                <h3>master_1 1</h3>
                <hr/>
            </>
        )
    }
}