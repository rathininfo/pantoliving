
import Navbar from './Navbar';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import BestSellingProducts from './BestSellingProducts';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <WhyChoose></WhyChoose>
          <BestSellingProducts></BestSellingProducts>
        </div>
    );
};

export default Home;