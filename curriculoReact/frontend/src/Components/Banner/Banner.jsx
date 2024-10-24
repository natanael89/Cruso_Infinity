import React, { useEffect, useState } from "react";
import "./style.css";

const bannerImages = [
    {
        title: 'Full Stack Developer',
        description: 'Conheça o curso de desenvolvimento full stack',
        background: 'https://bitcoinblock.com.br/wp-content/uploads/2024/02/vantagens-ai-2.png'
    },
    {
        title: 'Design Web',
        description: 'Conheça o curso de design web',
        background: 'https://www.techopedia.com/pt/wp-content/uploads/sites/5/2024/09/IA-4.webp'
    }
      
  ];

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
        }, 30000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div 
        className={"banner-container"} 
        style={{ backgroundImage: `url(${bannerImages[currentImageIndex].background})` }}>
          
            <div className="banner-content">
            <h1>{bannerImages[currentImageIndex].title}</h1>
            <p>{bannerImages[currentImageIndex].description}</p>
            <div className="banner-btn">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Contact</button>
            </div>
            </div>
        </div>
    )
}

export default Banner;