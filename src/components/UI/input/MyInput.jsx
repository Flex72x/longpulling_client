import React from "react";

const MyInput = ({...props}) => {
    return (
        <input
            {...props}
            className="h-8 border-solid border-2 border-indigo-500 focus:border-indigo-500 focus:outline-none rounded-lg"
        />
    )
}

export default MyInput