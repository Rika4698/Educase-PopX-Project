import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        console.log('Navigating to:', pathname);

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;

};

export default ScrollToTop;


