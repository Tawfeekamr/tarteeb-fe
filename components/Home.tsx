'use client'
import NavBar from "@/components/NavBar";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";
import {useEffect, useState} from "react";
import {getMetaData} from "@/services";
import {SiteInfo} from "@/types/siteInfo";

export default function HomePage() {
    const [websiteDate, setWebsiteData] = useState<SiteInfo | null>(null);
    useEffect(() => {
        getMetaData().then(res =>{
            const settingsData = res.data.docs[0]
            setWebsiteData(settingsData)
            localStorage.setItem('metaData', JSON.stringify(settingsData));
        }).catch(err => console.log(err))
    }, []);
    return (
        <>
            <main>
                <section className=" bg-cover "
                         style={{backgroundImage: `radial-gradient(at center, #ffffff00, #01010142), url(./img/heroImg.jpg)`}}>
                    <div className="h-1/2 flex flex-col  justify-between  max-w-screen-xl mx-auto">
                        <NavBar/>

                        <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-10 lg:mt-0">
                            <a href={websiteDate?.whatsappUrl}
                                className="capitalize cursor-pointer hover:animate-pulse bg-main-gradient py-3 lg:mt-20 px-6  rounded-full xl:text-16 text-12 text-white font-bold mb-6">
                                {'Let\'s Talk! on WhatsApp'}
                            </a>
                            <p className=" text-30 lg:h-auto lg:pb-32 sm:text-48 xl:text-80  leading-none max-w-2xl xl:max-w-3xl text-center text-white">
                                <span className=" font-DM-Sans">Embark on</span> <span
                                className=" font-Playfair-Display italic animate-zoom-fade-out">journeys</span> <span
                                className=" font-DM-Sans">not</span> <span
                                className=" font-Playfair-Display italic animate-zoom-fade-out">just</span> <span
                                className=" font-DM-Sans">destinations</span><span
                                className=" font-DM-Sans"> with</span><span className=" font-Playfair-Display italic animate-zoom-fade-out"> our trips.</span>
                            </p>
                        </div>
                        <div
                            className="flex flex-col lg:flex-row lg:justify-between xl:items-center max-w-screen-xl mx-auto w-full pb-14 xl:pb-20 px-2">
                            <p className="text-white mt-7 text-center lg:text-left xl:max-w-sm text-14 xl:text-16 font-DM-Sans font-normal mb-8">Unlock
                                the doors to diverse cultures, awe-inspiring landscapes, and thrilling adventures with
                                us.</p>
                            <div className={'flex justify-center mt-12'}>
                                <a href={"#trips"}
                                   className="border-animate text-white flex justify-between w-[300px] lg:w-auto items-center font-DM-Sans bg-slate-400 rounded-full font-bold gap-3 py-2 px-8">
                                    <span>Explore Now</span>
                                    <img src="./img/Arrow-Icon.svg" alt="arrow"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" max-w-screen-xl mx-auto mt-24 px-2 xl:px-0">
                    <Packages websiteDate={websiteDate} />
                </section>
                <section className="bg-gray-soft">
                    <section className="max-w-screen-xl mx-auto  mt-24 py-24 px-2 xl:px-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center">
                            <div className=" h-512 max-w-lg flex flex-col justify-between text-center xl:text-start">
                                <p className="text-36 xl:text-64 font-normal text-black-soft"><span
                                    className=" font-DM-Sans ">Our true</span> <span
                                    className=" font-Playfair-Display italic">beliefs</span> <span
                                    className=" font-DM-Sans italic">for</span> <span
                                    className=" font-Playfair-Display italic">your</span> <span
                                    className=" font-DM-Sans ">benefits</span></p>
                                <p className=" font-DM-Sans text-black-soft font-normal text-16 xl:text-20 opacity-75">
                                    Our beliefs arent just words; they are the foundation of every adventure we offer.
                                    With
                                    high commitment to sustainability, authenticity, and customer-centricity, we ensure
                                    that every trip you take with us is valuable.</p>
                            </div>


                            <div className=" max-w-lg border border-black-soft rounded-2xl mt-12 xl:mt-0">
                                <div className="flex gap-6   rounded-2xl border-black-soft px-12 py-6 font-DM-Sans">
                                    <img src="./img/Icon.svg" alt="item"/>
                                    <div>
                                        <h5 className=" text-14 xl:text-16 font-bold text-black-soft">Customer-Centric</h5>
                                        <p className=" text-14 xl:text-16 font-normal text-black-soft opacity-75">Being
                                            customer-centric is the compass that guides our travel services. We
                                            prioritize
                                            our {"customers"} needs.</p>

                                    </div>
                                </div>
                                <div
                                    className="flex gap-6 border-t  rounded-2xl border-black-soft px-12 py-6 font-DM-Sans">
                                    <img src="./img/Icon2.svg" alt="item"/>
                                    <div>
                                        <h5 className=" text-14 xl:text-16 font-bold text-black-soft">Sustainable
                                            Travel</h5>
                                        <p className=" text-14 xl:text-16 font-normal text-black-soft opacity-75">Committed
                                            to responsible and eco-conscious journeys, traveling the world with minimal
                                            footprints and pollutions.</p>

                                    </div>
                                </div>
                                <div
                                    className="flex gap-6 border-t  border-black-soft rounded-2xl  px-12 py-6 font-DM-Sans">
                                    <img src="./img/Icon3.svg" alt="item"/>
                                    <div>
                                        <h5 className=" text-14 xl:text-16 font-bold text-black-soft">Authentic
                                            Experiences</h5>
                                        <p className=" text-14 xl:text-16 font-normal text-black-soft opacity-75">We
                                            deliver journeys that immerse you in unforgettable encounter with
                                            the {"world's"} diverse cultures & landscapes.</p>

                                    </div>
                                </div>
                                <div className="flex gap-6 bg-black-soft rounded-2xl px-12 py-6 font-DM-Sans">
                                    <img src="./img/Icon4.svg" alt="item"/>
                                    <div>
                                        <h5 className=" text-14 xl:text-16 font-bold text-white">Quality Guides</h5>
                                        <p className=" text-14 xl:text-16 font-normal text-white opacity-75 ">Every
                                            journey will be led by knowledgeable, passionate experts who enhance your
                                            travel experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="  px-2 xl:px-0">
                    <section className=" max-w-screen-xl mx-auto bg-gray-dark h-560 rounded-3xl mt-24">
                        <div id={'about'} className="flex flex-col justify-center items-center h-full">
                            <a href="#">
                                <div
                                    className=" bg-heart-gradiant rounded-full w-100 h-100 flex justify-center items-center">
                                    <img src="./img/Polygon.svg" alt="play"/></div>
                            </a>
                            <p className=" text-36 xl:text-64 text-white font-Playfair-Display text-center"><span
                                className=" font-DM-Sans">Our</span> <span
                                className=" italic font-Playfair-Display">journey</span> <span
                                className=" font-DM-Sans">in pictures</span>
                            </p>
                            <span className=" text-16 font-normal text-white  font-DM-Sans text-center">See what makes each experience with our trips exceptional.</span>
                        </div>
                    </section>
                </section>


                <section className="max-w-screen-xl mx-auto px-2 xl:px-0">
                    <div className=" text-center sm:text-start sm:px-2 lg:px-0  mt-24">
                        <div className="flex sm:justify-between justify-center items-end ">
                            <h2 className=" text-36 xl:text-64  text-black-soft font-normal  xl:max-w-md"><span
                                className=" font-DM-Sans">Real</span> <span
                                className=" font-Playfair-Display italic">stories</span> <span
                                className=" font-DM-Sans">from travelers</span>
                            </h2>
                            {/*<div className="hidden sm:flex space-x-4">*/}
                            {/*    <a href="#"><img src="./img/Left-Arrow.svg" alt="icon"/></a>*/}
                            {/*    <a href="#"><img src="./img/Right-Arrow.svg" alt="icon"/></a>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
                        <li className="flex flex-col justify-end">
                            <div><img src="./img/Quote-Icon.svg" alt="Quote"/></div>
                        </li>
                        <li className=" border border-black-soft rounded-3xl p-8">
                            <p className=" text-16 xl:text-20 font-normal text-black-soft font-DM-Sans mb-6">My travel
                                dreams finally came true, thanks to them. I explored places I never thought I would see,
                                and everything was seamless from start to finish during the trip.</p>
                            <div className="flex gap-5">
                                <img src="./img/circle.svg" alt="circle"/>
                                <div>
                                    <p className=" text-16 font-bold text-black-soft font-DM-Sans text-nowrap sm:text-wrap ">
                                        Tawfeeq Amro
                                    </p>
                                    <span className=" text-16 font-normal text-black-soft font-DM-Sans ">Jordan</span>
                                </div>
                            </div>
                        </li>
                        <li className=" border border-black-soft rounded-3xl p-8">
                            <p className=" text-16 xl:text-20 font-normal text-black-soft font-DM-Sans mb-6">They
                                provided
                                an amazing adventure that {"I'll"} never forget. The accommodations were top-notch, and
                                the itinerary was a perfect trip of relaxation and excitement.</p>
                            <div className="flex gap-5">
                                <img src="./img/circle.svg" alt="circle"/>
                                <div>
                                    <p className=" text-16 font-bold text-black-soft font-DM-Sans text-nowrap sm:text-wrap ">
                                        Rashid Dwaik</p>
                                    <span className=" text-16 font-normal text-black-soft font-DM-Sans ">UAE</span>
                                </div>
                            </div>
                        </li>

                    </ul>
                </section>
                <section className="  mt-24 p-2 bg-cover bg-bottom "
                         style={{backgroundImage: "url(./img/pexels-toulouse-3099153.jpg)"}}>
                    <div className="max-w-screen-xl mx-auto">
                        <div className=" flex flex-col justify-center items-center">
                            <h2 className="xl:max-w-3xl  text-36 md:text-64 xl:text-80 font-normal text-black-soft font-DM-Sans mb-5">
                                <span>Ready to</span> <span className=" font-Playfair-Display italic">embark</span><br/>
                                <span>on a </span> <span className=" font-Playfair-Display italic">new</span>
                                <span>journey?</span></h2>
                            <p className="xl:max-w-4xl text-center text-20 font-normal font-DM-Sans text-black-soft">{"Don't "}let
                                your dream getaway remain a dream any longer. Take action now and let us craft your next
                                unforgettable adventure. Join us in turning your travel fantasies into unforgettable
                                realities.</p>
                            <div className=" bg-gray-soft py-12 px-4 xl:px-12 rounded-3xl mt-16">
                                <div className=" xl:space-x-5 flex justify-around flex-col sm:flex-row">
                                    <div className="border-b border-black-soft py-2 mb-4 sm:mb-0">
                                        <input
                                            className="opacity-50 px-2  xl:w-402  bg-transparent placeholder:text-16  placeholder:text-black-soft placeholder:font-DM-Sans placeholder:font-normal"
                                            type="text" placeholder="Name"/>
                                    </div>
                                    <div className="border-b border-black-soft py-2">
                                        <input
                                            className="opacity-50 px-2   xl:w-402  bg-transparent placeholder:text-16  placeholder:text-black-soft placeholder:font-DM-Sans placeholder:font-normal"
                                            type="text" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div className="border-b border-black-soft py-2 mt-12">
                                    <input
                                        className=" opacity-50 px-2   bg-transparent placeholder:text-16  placeholder:text-black-soft placeholder:font-DM-Sans placeholder:font-normal"
                                        type="text" placeholder="Email Address"/>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center justify-between mt-16">
                                    <div className="flex flex-col sm:flex-row items-center space-x-5 mb-4 xl:mb-0">
                                        <a href="#"><img src="./img/Tick-Box.svg" alt="Tick-Box"/></a>
                                        <span className=" text-nowrap text-16 text-black-soft font-DM-Sans font-normal">By subscribing to newsletter, I agree with</span>
                                        <span className=" text-nowrap text-16 text-black-soft font-DM-Sans font-bold ">Terms & Condition</span>
                                    </div>
                                    <div>
                                        <button
                                            className="text-white flex items-center  bg-black-soft font-DM-Sans rounded-full  font-bold gap-3 py-2 px-8 ">
                                            <span>Subscribe Now</span> <img src="./img/Arrow-Icon.svg" alt="arrow"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" max-w-screen-xl mx-auto  mt-96">
                        <div>
                            <p className=" text-center font-DM-Sans text-20 font-normal text-white">We are trusted by
                                our
                                partners and brands</p>
                        </div>
                        <div className="grid grid-cols-6  justify-items-center mt-10 pb-10">
                            <img src="./img/Logo1.svg" alt="Logo"/>
                            <img src="./img/Logo2.svg" alt="Logo"/>
                            <img src="./img/Logo3.svg" alt="Logo"/>
                            <img src="./img/Logo4.svg" alt="Logo"/>
                            <img src="./img/Logo5.svg" alt="Logo"/>
                            <img src="./img/Logo6.svg" alt="Logo"/>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
