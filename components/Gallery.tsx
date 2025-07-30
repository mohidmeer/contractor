"use client";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';


const Gallery = ({ images }: { images: string[] }) => {


    return (
        <LightGallery
            plugins={[lgZoom, lgThumbnail]}
            mode="lg-fade"
            thumbnail={true}
            elementClassNames="gallery"
            mobileSettings={{
                controls: false,
                showCloseIcon: false,
                download: false,
                rotate: false,
            }}
        >
            {images.map((i, z) => (
                <a
                    key={z}
                    href={`/images${i}`}
                    data-src={`/images${i}`}
                    data-exthumbimage={`/images${i}`}
                    className="relative p-4 overflow-hidden h-50 "
                > 
                    <Image
                        alt={`img_${z + 1}`}
                        src={`/images${i}`}
                        fill
                        className="object-cover overflow-hidden  hover:scale-125 transition-all "
                    />
                  
                </a>
            ))}
        </LightGallery>
    )
}

export default Gallery
