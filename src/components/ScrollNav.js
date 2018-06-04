import React from "react";

const THROTTLE_INTERVAL = 50;
const FADE_DURATION = 200;

function throttle(callback, wait, context = this) {
    let timeout = null;
    let callbackArgs = null;

    const later = () => {
        callback.apply(context, callbackArgs);
        timeout = null;
    };

    return function() {
        if (!timeout) {
            callbackArgs = arguments;
            timeout = setTimeout(later, wait);
        }
    };
}

export default class ScrollNav extends React.Component {
    static defaultProps = {
        distance: 300
    };

    state = {
        visible: false
    };

    checkVisibility = () => {
        if (window.scrollY > this.props.distance) {
            this.setState({
                visible: true
            });
        } else {
            this.setState({
                visible: false
            });
        }
    };

    onScroll = throttle(this.checkVisibility, THROTTLE_INTERVAL);

    componentDidMount() {
        this.checkVisibility();
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        const { visible } = this.state;
        const { children } = this.props;

        const container_styles = {
            opacity: visible ? 1 : 0,
            transition: FADE_DURATION + "ms ease-in-out"
        };

        return <div style={container_styles}>{children}</div>;
    }
}
