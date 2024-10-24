import React from "react";
import Slid from "../Slide/Slide";
import "./style.css";


const Card = () => {
    
    const projects1 = [
        { 
            id: 1, 
            title: 'Projeto 1', 
            image: 'https://picsum.photos/200/300?random=1',
            category: 'formations'
        },
        { 
            id: 2, title: 
            'Projeto 2', image: 
            'https://picsum.photos/200/300?random=2',
            category: 'formations'
            
        },
        { 
            id: 3, 
            title: 'Projeto 3', 
            image: 'https://picsum.photos/200/300?random=3',
            category: 'formations'
        },
        { 
            id: 4, 
            title: 'Projeto 4', 
            image: 'https://picsum.photos/200/300?random=4',
            category: 'formations'

        },
        { 
            id: 5, 
            title: 'Projeto 5', 
            image: 'https://picsum.photos/200/300?random=5',
            category: 'formations'
        },
        { 
            id: 6, 
            title: 'Projeto 6', 
            image: 'https://picsum.photos/200/300?random=6',
            category: 'formations'
        },
        { 
            id: 7, 
            title: 'Projeto 7', 
            image: 'https://picsum.photos/200/300?random=7',
            category: 'formations'
        },
        { 
            id: 8, 
            title: 'Projeto 8', 
            image: 'https://picsum.photos/200/300?random=8',
            category: 'formations'
        },
    ]

    const projects2 = [
        { 
            id: 9, 
            title: 'Projeto 1',
            image: 'https://picsum.photos/200/300?random=9',
            category: 'experiences'
        },
        { 
            id: 10, 
            title: 'Projeto 2', 
            image: 'https://picsum.photos/200/300?random=10',
            category: 'experiences'
        },
        { 
            id: 11, 
            title: 'Projeto 3', 
            image: 'https://picsum.photos/200/300?random=11',
            category: 'experiences'
        },
        { 
            id: 12, 
            title: 'Projeto 4', 
            image: 'https://picsum.photos/200/300?random=12',
            category: 'experiences'
        },
        { 
            id: 13, 
            title: 'Projeto 5', 
            image: 'https://picsum.photos/200/300?random=13',
            category: 'experiences'
        },
        { 
            id: 14, 
            title: 'Projeto 6', 
            image: 'https://picsum.photos/200/300?random=14',
            category: 'experiences'
        },
        { 
            id: 15, 
            title: 'Projeto 7', 
            image: 'https://picsum.photos/200/300?random=15',
            category: 'experiences'
        },
        { 
            id: 16, 
            title: 'Projeto 8', 
            image: 'https://picsum.photos/200/300?random=16',
            category: 'experiences'
        },
    ]

    const projects3 = [
        { 
            id: 17, 
            title: 'Projeto 1', 
            image: 'https://picsum.photos/200/300?random=17',
            category: 'top10'
        },
        { 
            id: 22, 
            title: 'Projeto 2', 
            image: 'https://picsum.photos/200/300?random=22',
            category: 'top10'
        },
        { 
            id: 33, 
            title: 'Projeto 3', 
            image: 'https://picsum.photos/200/300?random=33',
            category: 'top10'
        },
        { 
            id: 14, 
            title: 'Projeto 4', 
            image: 'https://picsum.photos/200/300?random=14',
            category: 'top10'
        },
        { 
            id: 55, 
            title: 'Projeto 5', 
            image: 'https://picsum.photos/200/300?random=55',
            category: 'top10'
        },
        { 
            id: 26, 
            title: 'Projeto 6', 
            image: 'https://picsum.photos/200/300?random=26',
            category: 'top10'
        },
        { 
            id: 17, 
            title: 'Projeto 7', 
            image: 'https://picsum.photos/200/300?random=17',
            category: 'top10'
        },
        { 
            id: 8, 
            title: 'Projeto 8', 
            image: 'https://picsum.photos/200/300?random=8',
            category: 'top10'
        
        },
            

    ]

    const projects4 = [
        { 
            id: 17, 
            title: 'Projeto 1', 
            image: 'https://picsum.photos/200/300?random=17',
            category: 'portfolio'
        },
        { 
            id: 22, 
            title: 'Projeto 2', 
            image: 'https://picsum.photos/200/300?random=22',
            category: 'portfolio'
        },
        { 
            id: 33, 
            title: 'Projeto 3', 
            image: 'https://picsum.photos/200/300?random=33',
            category: 'portfolio'
        },
        { 
            id: 14, 
            title: 'Projeto 4', 
            image: 'https://picsum.photos/200/300?random=14',
            category: 'portfolio'
        },
        { 
            id: 55, 
            title: 'Projeto 5', 
            image: 'https://picsum.photos/200/300?random=55',
            category: 'portfolio'
        },
        { 
            id: 26, 
            title: 'Projeto 6', 
            image: 'https://picsum.photos/200/300?random=26',
            category: 'portfolio'
        },
        { 
            id: 17, 
            title: 'Projeto 7', 
            image: 'https://picsum.photos/200/300?random=17',
            category: 'portfolio'
        },
        { 
            id: 8, 
            title: 'Projeto 8', 
            image: 'https://picsum.photos/200/300?random=8',
            category: 'portfolio'
        
        },
            

    ]

    return (
        <section className="portfolio-section">
            <h2>Formações</h2>
            <div className="portfolio-slider">
                <Slid projects={projects1}/>
            </div>
            <h2>Experiências</h2>
            <div className="portfolio-slider">
                <Slid projects={projects2}/>
            </div>
            <h2>Top10</h2>
            <div className="portfolio-slider">
                <Slid projects={projects3}/> 
            </div>
            <h2>Portfólio</h2>
            <div className="portfolio-slider">
                <Slid projects={projects4}/>
            </div>
        </section>
    )
}

export default Card;