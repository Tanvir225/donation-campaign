import Header from "../Header/Header";

const Banner = () => {
    return (
        <div className="h-[70vh]  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${`https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230562.jpg?w=740&t=st=1700329499~exp=1700330099~hmac=aa4255d431900dbc97e940cffa3f05c0a141f3d81524142e811556a3455dff73`})` }}>
            <div className="hero-overlay bg-opacity-90 bg-slate-50">
                <Header></Header>
                <div className="flex flex-col justify-center items-center mt-16">
                    <div>
                        <h2 className="text-3xl font-extrabold">I Grow By Helping People In Need</h2>
                        <div className="flex justify-center mt-5">
                            <input type="text" placeholder="Ex:Health" className="input input-bordered input-error w-full max-w-xs" />
                            <button className="bg-[#FF444A] px-5 py-1 rounded-lg text-white">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;