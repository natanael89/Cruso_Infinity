import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import "./style.css";

const Slid = ({projects}) => {
    const navigate = useNavigate();

    const handleClick = (project) => {
        navigate(`/${project.category}`, { 
            state: { project } 
        });
    }


   
    return (
        <div>
              <Swiper
             slidesPerView={2}
             spaceBetween={10}
             pagination={{ clickable: true }}
             modules={[Pagination]}
             breakpoints={{
                640:{
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                0:{
                    slidesPerView: 1,
                    spaceBetween: 0
                }
             }}
             className="portfolio-grid"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={project.id} onClick={() => handleClick(project)}>
                        <div className="portfolio-card">
                        <div
                         className="porfolio-img"
                         style={{ backgroundImage: `url(${project.image})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         height: '200px',
                         width: '100%',
                         borderRadius: '10px',
                        
                        }}
                        >
                       
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slid;