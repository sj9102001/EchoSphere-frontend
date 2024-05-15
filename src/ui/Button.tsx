import React from 'react'

const Button = ({ onClickHandler, title, }: {
    onClickHandler: () => void,
    title: string
}) => {
    return (
        <button onClick={onClickHandler} type="button" className="text-textColor bg-primaryColor hover:bg-secondaryColor focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {title}
        </button>
    )
}

export default Button