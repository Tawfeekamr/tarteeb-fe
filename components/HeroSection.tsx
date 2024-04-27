'use client';

import {useEffect, useState} from "react";
import api from "@/utils/axiosConfig";

export  default function HeroSection() {
    const [heroData, setHeroData] = useState<any>({})
    const [pages, setPage] = useState<any>([])
    useEffect(() => {
        const fetchData = async () => {
        // const response = await api.get('/api/pages/662633ceaf08bc664ada7e54?locale=en&draft=false&depth=1')
        const response = await api.get('/api/pages?limit=10?locale=en&draft=false&depth=1')
        setHeroData(response.data)
        setPage(response.data.docs)
            console.log(response.data)
        }

        fetchData()
    }, []);
    return (<>{pages.map((page: any) => (<div key={page.id}>{page.title}</div>))}</>)
}
