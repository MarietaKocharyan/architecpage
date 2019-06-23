import React from 'react';

const styles = {
    backgroundColor: "white",
    margin: "25px",
    height: "781px",
};
// const aboutPageParagraph = [{
//     id: 0,
//     text:  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }];

const About = () => {
    return (
        <div className="about-page" style={styles}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
    )
}

export default About;