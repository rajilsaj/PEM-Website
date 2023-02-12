import React from 'react';

interface Props
{
    url: string;
    menuName : string;
}

const Header: React.FC<Props> = ({url}, {menuName}) => {
    return (
           <header className='header'>
            <LogoOrText  />
            <ul>
                <li>

                </li>
            </ul>
            <span>

            </span>
           </header>
    );
};

export default Header;

// Logo or text
export const LogoOrText: React.FC = () => {
    return (
        <span className='logo-pem-or-text'>
                
        </span>
    );
};


