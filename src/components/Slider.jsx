// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide3.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='z-0'>
            <Swiper
                navigation={true}
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}       
                modules={[Autoplay, Pagination, Navigation]}
              
            >

                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='h-[500px] w-full' src={img1} alt="" />
                        <div className='absolute top-1/3 left-1/4 text-white'>
                            <h2 className='text-3xl text-center'>Testy burger</h2>
                            <p className='text-gray-400'>
                                Burgers are an iconic food item enjoyed worldwide. Typically, a burger consists of a cooked ground <br /> meat patty placed inside a sliced bread roll or bun.</p>
                                <Link to='/allFoods'><button className='btn btn-outline text-white mt-4'>All Food</button></Link>
                        </div>
                       

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='h-[500px] w-full' src={img2} alt="" />
                        <div className='absolute top-1/3 left-1/4 text-white'>
                            <h2 className='text-3xl text-center'>Meat Fry</h2>
                            <p className='text-black'>
                                Meat fry involves cooking thinly sliced or diced meat in hot oil or fat until golden brown and crispy. It is a versatile method used for various meats like beef, chicken, pork, or fish. Seasonings like salt, pepper, and spices add flavor.  Meat fry can be enjoyed alone, with sauces, or as part of various dishes.</p>
                                <Link to='/allFoods'><button className='btn btn-outline text-white mt-4'>All Food</button></Link>
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='h-[500px]'>
                        <img className='h-[500px] w-full' src={img3} alt="" />
                        <div className='absolute top-1/3 left-1/4 text-white'>
                            <h2 className='text-3xl text-center text-black'>Testy Pizza</h2>
                            <p className='text-black'>
                                Pizza is a beloved dish originating from Italy, consisting of a round flattened base <br />of dough topped with various ingredients. The base is typically made from wheat flour, water, and yeast, creating a chewy crust when baked.</p>
                                <Link to='/allFoods'><button className='btn btn-outline text-white mt-4'>All Food</button></Link>
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;