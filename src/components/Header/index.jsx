import React from 'react';
import './index.scss'

export default class Header extends React.Component {
    constructor (props){
        super(props)
    }
    render (){
        return (
            <>
                <h1>Hello World! from {this.props.author}</h1>
                <hr/>
            </>
        )
    }
}