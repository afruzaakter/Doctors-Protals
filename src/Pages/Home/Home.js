import React from 'react';
import Login from './Login';
import Footer from '../Shared/Navbar/Footer/Footer';
import Banner from './Banner/Banner';
import Dental from './Dental/Dental';
import Info from './Info/Info';
import MakeAppointmentPage from './MakeAppointmentPage/MakeAppointmentPage';



import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointmentPage></MakeAppointmentPage>
            <Testimonials></Testimonials>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Home;