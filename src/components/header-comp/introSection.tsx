import React, {Component} from 'react';

interface IntroSectionState{

}

class IntroSection extends Component<{}, IntroSectionState > {
    render() {
        return (
            <section className="main-image-video-bg">
                <h1>
                    Here I am
                </h1>
            </section>
        );
    }
}

export default IntroSection;