import React, {Component} from 'react';
import { SearchBarComponent } from './searchBar';

interface HeaderState {

}

class HeaderSection extends Component<{},HeaderState> {
    render() {
        return (
            <header className='main-header-container redly'>
                <span className='logo-pem-or-text'>
                    <h1 className=''>
                        <a href='#'>
                        PEM
                        </a>
                    </h1>
                </span>
            <nav>
            <ul className=''>
                <li>
                <a href='#'>
                Accueil
                </a>
                </li>
                
                <li>
                <a href='#'>
                La vie de l'église
                </a>
                </li>
                <li>
                <a href='#'>
                Agenda
                </a>
                </li>
                
                <li>
                <a href='#'>
                Enseignements
                </a>
                </li>
                <li>
                <a href='#'>
                En direct
                </a>
                </li>
                <li>
                <a href='#'>
                Don en ligne
                </a>
                </li>
                <li>

                <a href='#'>
                Contact
                </a>
                </li>
            </ul>
            </nav>
            <SearchBarComponent eventContext="SearchBar" />
            </header>

        );
    }
}

export default HeaderSection;
