import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import { FallingLines } from  'react-loader-spinner'

const Main = () => {
    let location = useLocation()
    // console.log(location);

    const navigation = useNavigation()
    return (
        <div>
            {
                location.pathname === "/" ? (<div>
                    <div>
                        {
                            navigation.state=== 'loading' ? (<div className="flex flex-col justify-center items-center mt-10"><FallingLines ></FallingLines></div>) : <Outlet></Outlet>
                        }
                    </div>
                    <Footer></Footer>
                </div>) : (
                    <div>
                        <div>
                            <Header></Header>
                            {
                                navigation.state=== 'loading' ? (<div className="flex flex-col justify-center items-center mt-10"><FallingLines ></FallingLines></div>) : <Outlet></Outlet>
                            }
                        </div>
                        <Footer></Footer>
                    </div>
                )
            }
        </div>
    );
};

export default Main;