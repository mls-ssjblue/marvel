import React from 'react'
import {render} from "react-dom";

interface WelcomeProps {
    name: string,
}

export class ClassComponent extends React.Component < WelcomeProps>  {
    render()
    {
        return <div>
            hi, {this.props.name}
        </div>
    }


}