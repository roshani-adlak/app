"use client"
import React from "react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useDynamicMetadata(titles, descriptions) {
    const router = useRouter();
    useEffect(()=>{
    const updateMetadata = (url) => {
        // const title = titles[url] || "App Portal";
        // const description = descriptions[url] || "app-description";

        const title = titles[router.asPath] || "App Portal";
        const description = descriptions[router.asPath] || "app-description";

        document.title = title;

        const metaDescription = document.querySelector("meta[name='description']")

        if(metaDescription){
            metaDescription.setAttribute("content", description);
        }
    };

    updateMetadata(router.asPath);
    // router.events.on("routerChangeComplete", updateMetadata);

    // return() =>{
    //     router.events.off("routerChangeComplete", updateMetadata)
    // };
}, [router.asPath, titles, descriptions]);
}