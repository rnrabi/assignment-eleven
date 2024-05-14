import burgar from '../assets/christmas-dinner.png'
import dessert from '../assets/cupcake.png'
import seafood from '../assets/crab.png'
import beverage from '../assets/beverage.png'

const OurSpecialMenu = () => {
    return (
        <div>
             <div className="divider divider-neutral w-1/5 mx-auto">FOOD MENU</div>
            <section className="m-4 md:m-8 md:mt-0 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto p-4 pt-0 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Our Specials Menu</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="flex flex-col items-center p-4 hover:bg-gray-300 border-r-2 border-dashed border-green-400">
                        <img src={burgar} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">MAIN DESHES</h3>
                    </div>

                    <div className="flex flex-col items-center p-4 hover:bg-gray-300 border-r-2 border-dashed border-green-400">
                      <img src={dessert} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">DESSERT</h3>
                    </div>

                    <div className="flex flex-col items-center p-4 hover:bg-gray-300 border-r-2 border-dashed border-green-400">
                        <img src={seafood} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">SEAFOOD</h3>
                    </div>

                    <div className="flex flex-col items-center p-4 hover:bg-gray-300">
                        <img src={beverage} alt="" />
                        <h3 className="my-3 text-3xl font-semibold">BEVERAGE</h3>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OurSpecialMenu;