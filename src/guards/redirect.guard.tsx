import { Outlet } from "react-router";


const RedirectGuardRoute = () => {
    
    const listURLsToRedirect = [
        "https://portfolio-affonso-ruiz.vercel.app/"
    ];

    if (listURLsToRedirect.some((url) => window.location.href.includes(url))) {
        window.location.href = "https://affonsoruiz.com/";
        return;
    }
    
    return <Outlet />;
}

export default RedirectGuardRoute;