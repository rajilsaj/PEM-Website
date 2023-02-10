import React, {Component} from 'react';

interface IntroSectionState{

}
/* Main Function - choose if the background image would be a video or an image
 from the PEM api*/
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