import * as React from 'react';
import HeaderLogo from '../../Header/parts/header.logo';

interface Props {
};

interface State {
};

const Slack = () => {
    return (
        <svg className="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" focusable="false"><title>Slack</title><path fill="currentColor" d="M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z"></path><path d="M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z" fill="currentColor"></path></svg>
    )
}
const StackExchange = () => {
    return (
        <svg className="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><title>Sitecore StackExchange</title><path fill="currentColor" d="M22.4 57.5h74.8v15.4H22.4z"></path><path fill="currentColor" d="M22.4 37.6h74.8V53H22.4z"></path><path fill="currentColor" d="M85.5 17H34.4c-6.6 0-12 5.5-12 12.3v4h74.8v-4C97.2 22.5 92 17 85.5 17z"></path><path fill="currentColor" d="M22.4 77.3v4c0 6.8 5.4 12.3 12 12.3h32v16.3l15.8-16.3h3.5c6.6 0 12-5.5 12-12.3v-4H22.4z"></path></svg>
    )
}

const Github = () => {
    return (
        <svg className="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36" focusable="false"><title>GitHub</title><path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fillRule="evenodd"></path></svg>
    )
}

class FooterCommunity extends React.Component<Props, State> {
    render() {
        return (
            <ul className="o-footer__partners a-list a-list--hor h-ph h-pb">
                <li>
                    <a href="slack://channel?team=T09SHRBNU&id=C7JT0NRQW"><Slack /></a>
                </li>
                <li>
                    <a href="https://sitecore.stackexchange.com/tags/jss"><StackExchange /></a>
                </li>
                <li>
                    <a href="https://github.com/sitecore/jss"><Github /></a>
                </li>
            </ul>
        )
    }
};

export default FooterCommunity;
