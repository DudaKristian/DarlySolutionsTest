import React from 'react';



export const BtnSubmit: React.FC = () => {


    const onSubmitHandler = (event:React.FormEvent<HTMLButtonElement>):void  => {
        event.preventDefault()
        

    }


    return (
        <div>
            <button
                type='submit'
                onSubmit={onSubmitHandler}
            >
                Add new Contact
            </button>
        </div>
    )
}