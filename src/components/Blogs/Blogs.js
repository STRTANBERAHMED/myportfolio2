import React from 'react';
import './Blogs.css';
import Header from '../../Pages/Header/Header';
import pic1 from '../../images/mongoose.webp';
import pic2 from '../../images/react.jpg';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <h2 className='blogs text-center' data-aos="fade-zoom-in" data-aos-duration="1800">My Blogs</h2>
            <div class="blog row row-cols-1 row-cols-md-2 g-4" data-aos="fade-zoom-in" data-aos-duration="1800">
                <div class="col">
                    <div class="card">
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Learn More About Mongoose</h5>
                            <p class="card-text">Mongoose is a Node. js-based Object Data Modelling (ODM) library for MongoDB. Currently, I am learning mongoose because I found some advantages in it.</p>
                            <a href="https://dev.to/strtanberahmed/mongoose-blog-26d1" class="text-center btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={pic2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Let's Explore React</h5>
                            <p class="card-text">React is one of the best javascript framework. It gives the best-rendering performance, clean code, rich user interface, etc. React build single-page applications.</p>
                            <a href="https://dev.to/strtanberahmed/lets-explore-react-56l1" class="text-center btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                {/* <div class="col">
                    <div class="card">
                        <img src={pic1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Blogs;