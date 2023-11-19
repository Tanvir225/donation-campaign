import Header from "../Header/Header";
import bannerImg from "../../assets/images/banner.jpg"
const Banner = () => {
    return (
        <div className="h-[70vh]  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-90 bg-slate-50">
                <Header></Header>
                <div className="flex flex-col px-10 mt-5 text-center justify-center items-center lg:mt-10 lg:p-0">
                    <div>
                        <h2 className="text-3xl font-extrabold">I Grow By Helping People In Need</h2>
                        <div className="flex justify-center mt-5">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-red-700" placeholder="Ex: Health" required></input>
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#FF444A] px-5 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                   
                                    <span className="">Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;