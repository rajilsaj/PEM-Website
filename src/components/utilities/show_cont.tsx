import React from 'react'

interface Props {
    children: React.ReactNode;
}

export const  Container = (props:Props) => {
    return <section className='container'>
        {props.children}
    </section>
} 

