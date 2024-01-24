import React, { useEffect, useRef, useState } from "react";

function useWindowSize() {
    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const SmoothScroll = ({ children }) => {

    const windowSize = useWindowSize();

    const scrollingContainerRef = useRef();

    if (window.innerWidth > 400) {
        var data = {
            ease: 0.05,
            current: 0,
            previous: 0,
            rounded: 0,
        };
    }
    else {
        var data = {
            ease: 0.5,
            current: 0,
            previous: 0,
            rounded: 0,
        };
    }

    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
    };

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="parent" style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }} >
            <div ref={scrollingContainerRef}>{children}</div>
        </div>
    );
};

export default SmoothScroll;