import React from 'react';

interface Props
{
    url: string;
    menuName : string;
}

const Link: React.FC<Props> = ({url}, {menuName}) => {
    return (
            <a href={url}>{menuName}</a>
    );
};

export default Link;