import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className='pt-24'>
        <Contact />
      </div>
      <div className='pt-24'>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs; 