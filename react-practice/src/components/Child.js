import React from 'react'

function Child(props){
    const parentMessage = props.message || 'Nothing'

    return (
        <div>
            <span>{parentMessage}</span>
        </div>
    )
}

export default Child