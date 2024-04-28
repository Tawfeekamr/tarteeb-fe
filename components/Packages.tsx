'use client'

import {useEffect, useState} from "react";
import {getPackagesData} from "@/services";
import {Package} from "@/types/packages";
import {BACKEND_URL} from "@/utils/statics";
import {SiteInfo} from "@/types/siteInfo";

interface  Props {
    websiteDate: SiteInfo | null
}
function Packages({websiteDate}: Props): JSX.Element {
    const [packagesData, setPackagesData] = useState<any[] | []>([]);
    useEffect(() => {
        getPackagesData().then((res) => {
            setPackagesData(res.data.docs);
        }).catch(err => console.log(err));
    }, []);

    if(packagesData.length === 0) {
        return <></>
    }
    return (
        <>
            <section id={"trips"}>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="xl:xl:max-w-lg">
                        <p className=" text-36 xl:text-64 font-normal text-black-soft  text-center xl:text-start mb-4 xl:mb-0"><span className=" font-DM-Sans">Must</span> <span className=" font-Playfair-Display">experience</span> <span className=" font-DM-Sans">packages</span></p>
                    </div>
                    <div className=" xl:max-w-md">
                        <p className="text-20 font-normal text-black-soft mb-7 opacity-75">Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</p>
                        {/*<a href="#" className="text-16 font-bold text-black-soft">See All Packages</a>*/}
                    </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    {packagesData.map((pack: any)=>{
                        return(
                            <span key={pack?.id}>
                                <a href="#" className={' block relative overflow-hidden'}>
                                    <li className="h-424 w-full rounded-xl bg-cover  bg-card-gradiant"
                                        style={{backgroundImage: `radial-gradient(at center, #ffffff00, #01010142),url(${BACKEND_URL + pack?.image?.url || './img/card.jpg'})`}}>
                                        <div className="flex flex-col justify-between h-full p-4">
                                            <div className="flex justify-end">
                                                {/*<div*/}
                                                {/*    className="flex justify-center items-center h-50 w-50 rounded-full bg-heart-gradiant ">*/}
                                                {/*    <img className="rounded-full" src="./img/heart.svg" alt="Heart"/>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div>
                                                <p className="text-16 xl:text-20 font-bold text-white font-DM-Sans text-nowrap">{pack?.title}</p>
                                                <div className="flex justify-between ">
                                                    <span
                                                        className=" text-14 xl:text-16 font-normal text-white font-DM-Sans">{pack?.duration?.days} days, {pack?.duration.nights} Nights </span>
                                                    <span
                                                        className="text-16 xl:text-20 font-normal text-white font-DM-Sans">{pack?.price} {websiteDate?.currency}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </a>
                            </span>
                        )
                    })}
                </ul>

            </section>
        </>
    )
}

export default Packages
