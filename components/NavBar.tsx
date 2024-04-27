function NavBar() {
    return (
        <>
            <section className="px-2 xl:px-0">
                <header>
                    <nav className='flex justify-between py-8'>
                        <span className={'hover:bg-main-gradient rounded-xl p-2 transition duration-300 ease-in-out'}>
                            <a href="#" className={'w-2'}>
                                <img src="./img/tarteeb-white.svg" alt=""/>
                            </a>
                        </span>
                        <div>
                            <ul className='md:flex text-white font-normal text-base font-DM-Sans hidden'>
                                <li className={'border-animate p-2 rounded-xl w-[100px] text-center mx-3'}>
                                    <a href="#" className={''}>Trips</a>
                                </li>
                                <li className={'border-animate ease-in-out p-2 rounded-xl w-[100px] text-center mx-3'}>
                                    <a href="#">Destination</a>
                                </li>
                                <li className={'border-animate transition duration-300 ease-in-out p-2 rounded-xl w-[100px] text-center mx-3'}>
                                    <a href="#">About</a>
                                </li>
                                <li className={'border-animate transition duration-300 ease-in-out p-2 rounded-xl w-[100px] text-center mx-3'}>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                            <div>
                                <a href="#"><img className='block md:hidden' src="./img/menu.svg" alt="menu" /></a>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
        </>
    )
}

export default NavBar
