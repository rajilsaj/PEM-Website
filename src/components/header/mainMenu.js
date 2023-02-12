import React from 'react';

interface Props
{
    url: string;
    menuName : string;
}


const MainMenu: React.FC<Props> = ({url}, {menuName}) => {
    return (
            <ul>
                <li>

                </li>
            </ul>
    );
};

export default MainMenu;