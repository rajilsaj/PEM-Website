import React from 'react'

type IntroProps = {
    intro_background : string,
}


export class IntroSection extends React.Component<IntroProps> {
    render() {
        const bgStyle={ 
                    background: `url(${this.props.intro_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
        };

        return (
            <section className="main-image-video-bg" style={bgStyle}>
            </section>
        );
    }
}

