import React from 'react'

export default props => (
    <div>
        {props.children}
        { React.cloneElement(props.children,{...props}) }
    </div>
)