import banner from '../assets/banner.jpg'
import PropTypes from 'prop-types';

const GalleryBanner = ({heading}) => {
    return (
        <div>
            <div className="hero h-72 bg-fixed" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GalleryBanner;

GalleryBanner.propTypes = {
    heading: PropTypes.node.isRequired
}