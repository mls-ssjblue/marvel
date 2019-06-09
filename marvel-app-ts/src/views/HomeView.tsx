import React from 'react'

interface WelcomeProps {
    name: string,
}
export const HomeView: React.FC<WelcomeProps> = (props) => {

    return (
        <div>
            hi, {props.name}
        </div>
    )

};