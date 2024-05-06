import React from 'react';

export default function Service1() {

    let truck1 = 'https://cvimg1.cardekho.com/p/630x420/in/bharat-benz/5528t/bharat-benz-5528t-13046.jpg?impolicy=resize&imwidth=420';
    let truck2 = 'https://img.freepik.com/free-photo/truck-with-white-trailer-drives-down-road-with-mountains-background_188544-8152.jpg';
    let truck3 = 'https://img.freepik.com/premium-photo/trucks-mountain-highway-sunset-generative-ai_28914-6807.jpg';

    return (
        <div classNameName='body'>
         <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={truck1} className="d-block w-100 img-fluid carousel-img" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='home-head'>Onlie truck Booking make easy</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={truck2} className="d-block w-100 img-fluid carousel-img" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='home-head'>Book Truck and Check Fare Online Instantly</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={truck3} className="d-block w-100 img-fluid carousel-img" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className='home-head'>Check Truck Type or Fare Online</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
<div className='home-con'>
    <h1 className='home-head'>TruckGuru Online Truck Transport Services in India for Your Business</h1>
<p>TruckGuru is a leading provider of online truck booking in India. We are dedicated to offering top-notch and affordable transport solutions to businesses across the country. Through our innovative and seamless transportation services, we strive to bridge the gap between customers, transporters, manufacturers/traders, and others.</p>
<p>Our advanced, user-friendly online booking platform has revolutionized the truck hiring process, making it simpler and faster for our customers. With just a few clicks, users can access a wide range of truck options, select their preferred vehicle, and get the instant truck booking price to fulfill their transportation needs.</p>
<p>Experience hassle-free online truck booking without wasting time, money, and effort. Our cutting-edge online truck booking and truck transport solutions empower businesses to offer on-time deliveries and achieve customer satisfaction and financial growth. Choose TruckGuru as your best online truck booking platform to simplify your logistics operations. Book trucks with us and avail the flawless transportation solutions that cater to your needs.</p>
</div>
<div>
    <ul>
        <li><h5>Largest Online Transport Marketplace</h5></li>
        <p>Connect with top transporters, shippers, and transport agents across the country through TruckGuru, India's best online truck booking platform. Enjoy a wide range of options and find the best deals at competitive prices.</p>
        <li><h5>Verified Trucks & Daily Active Loads</h5></li>
        <p>With over 500+ verified trucks and more than 50 daily active loads available on TruckGuru, users can instantly book trucks and loads at the most affordable rates.

</p>
        <li><h5>Zero Commission & Transparent Pricing</h5></li>
        <p>TruckGuru, a leading online transport booking company, prides itself on not charging any commissions or hidden costs from its users. If you need to book a mini truck for shifting, or larger lorries, there will be no extra charges.

</p>
        <li><h5>Zero Commission & Transparent Pricing</h5></li>
        <p>Enjoy peace of mind with TruckGuru's secure payment gateway, approved by the Reserve Bank of India. Make payments easily and enjoy a seamless online booking experience.</p>
        <li><h5>24/7 Dedicated Customer Support</h5></li>
        <p>TruckGuru offers round-the-clock customer support to assist users with any booking-related queries or issues they may encounter.

</p>

    </ul>
</div>



        </div>
    )
}


