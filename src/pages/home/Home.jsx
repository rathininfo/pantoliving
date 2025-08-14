
import Navbar from './Navbar';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import BestSellingProducts from './BestSellingProducts';
import Experience from './Experience';
import Materials from './Materials';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <WhyChoose></WhyChoose>
          <BestSellingProducts></BestSellingProducts>
          <Experience></Experience>
          <Materials></Materials>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;