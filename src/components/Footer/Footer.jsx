import "./Footer.css"
import { assets } from "../../../public/frontend_assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic animi quis tenetur possimus molestiae similique ipsum soluta rerum distinctio, tempora nobis vel eaque non, quo est ullam alias fugiat accusamus?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>
                        GET IN TOUCH
                    </h2>
                    <ul>
                        <li>+1-212-555</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">
                Copyright {new Date().getFullYear()} @ Tomato.dummy.com - All Right Reserved
            </p>
        </div>
    );
};

export default Footer;