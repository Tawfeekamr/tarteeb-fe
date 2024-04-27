

function Packages() {
    const slider =[
        {
            id:1,
            img:'./img/card.jpg',
            text:'Tropical Paradise',
            span:'7 days, 6 nights',
            price:'$999'
        },
        {
            id:2,
            img:'./img/card.jpg',
            text:'Tropical Paradise',
            span:'10 days, 9 nights',
            price:'$1299'
        },
        {
            id:3,
            img:'./img/card.jpg',
            text:'Tropical Paradise',
            span:'5 days, 4 nights',
            price:'$899'
        },
        {
            id:4,
            img:'./img/card.jpg',
            text:'Tropical Paradise',
            span:'8 days, 7 nights',
            price:'$1099'
        },
    ]

    return (
        <>
            <section id={"trips"}>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="xl:xl:max-w-lg">
                        <p className=" text-36 xl:text-64 font-normal text-black-soft  text-center xl:text-start mb-4 xl:mb-0"><span className=" font-DM-Sans">Must</span> <span className=" font-Playfair-Display">experience</span> <span className=" font-DM-Sans">packages</span></p>
                    </div>
                    <div className=" xl:max-w-md">
                        <p className="text-20 font-normal text-black-soft mb-7 opacity-75">Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</p>
                        <a href="#" className="text-16 font-bold text-black-soft">See All Packages</a>
                    </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                    {slider.map((item)=>{
                        return(
                            <span key={item.id}>
                                <a href="#">
                                    <li className="h-424 w-full rounded-xl bg-cover  bg-card-gradiant"
                                        style={{backgroundImage: `radial-gradient(at center, #ffffff00, #01010142),url(${item.img})`}}>
                                        <div className="flex flex-col justify-between h-full p-4">
                                            <div className="flex justify-end">
                                                {/*<div*/}
                                                {/*    className="flex justify-center items-center h-50 w-50 rounded-full bg-heart-gradiant ">*/}
                                                {/*    <img className="rounded-full" src="./img/heart.svg" alt="Heart"/>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div>
                                                <p className="text-16 xl:text-20 font-bold text-white font-DM-Sans text-nowrap">{item.text}</p>
                                                <div className="flex justify-between ">
                                                    <span
                                                        className=" text-14 xl:text-16 font-normal text-white font-DM-Sans">{item.span}</span>
                                                    <span
                                                        className="text-16 xl:text-20 font-normal text-white font-DM-Sans">{item.price}</span>
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
