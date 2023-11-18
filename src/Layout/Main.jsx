import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    let location = useLocation()
    console.log(location);
    return (
        <div>
            {
                location.pathname === "/" ? (<div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>) : (
                    <div>
                        <div>
                            <Header></Header>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
                )
            }
        </div>
    );
};

export default Main;