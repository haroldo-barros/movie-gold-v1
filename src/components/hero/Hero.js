import './Hero.css';
import { Carousel } from "react-bootstrap";
import { Paper } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = ({ movies }) => {

    const navigate = useNavigate();

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <div className="movie-carousel-container">
            <Swiper
                // 4. Register Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                // 5. Configure options
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
                loop
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {
                    movies.map((movie) => {
                        return (
                            <SwiperSlide>
                                <Paper key={movie.imdbId}>
                                    <div className="movie-card-container">
                                        <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                            <div className="movie-detail">
                                                <div className="movie-poster">
                                                    <img src={movie.poster} alt="" />
                                                </div>
                                                <div className="movie-title">
                                                    <h4>{movie.title}</h4>
                                                </div>
                                                <div className='movie-buttons-container'>
                                                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                        <div className='play-button-icon-container'>
                                                            <FontAwesomeIcon className='play-button-icon'
                                                                icon={faCirclePlay}
                                                            />
                                                        </div>
                                                    </Link>

                                                    <div className='movie-review-button-container'>
                                                        <Button variant="info" onClick={() => reviews(movie.imdbId)}>Reviews{movie.imdbId}</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
            <div className="swiper-custom-pagination" />
        </div >
    )
}

export default Hero;