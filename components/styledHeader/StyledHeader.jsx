import React from 'react';
import "./StyledHeader.css"

const StyledHeader = (props) => {
    return(
        <h1 className="StyledHeader">{props.innerHTML}</h1>

    )
}

export default StyledHeader;