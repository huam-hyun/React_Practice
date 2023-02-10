import React from "react";

import { dataContext } from "./data-context";

const Child = () => {
    
    return (
        <dataContext.Consumer>
            {(value) => {
                console.log(value)
                return (
                    <div>
                        {value?.data}
                        <button onClick={value.setCount}>+</button>
                    </div>
                )
            }}
        </dataContext.Consumer>
    )
}

export default Child