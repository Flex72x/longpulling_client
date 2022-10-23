import React from "react";

const MyButton = ({children, ...props}) => {
    return (
        <button
            {...props}
            className='h-8 bg-indigo-500 border-solid border-2 border-indigo-500 px-2 rounded-lg text-white ml-1'
        >
            {children}
        </button>
    )
}

export default MyButton