import { assets } from "../../../public/frontend_assets/assets";
import "./AppDownload.css"

const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br />
                Tomato App
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="play-store" />
                    <img src={assets.app_store} alt="app-store" />
                </div>
            </p>


        </div>
    );
};

export default AppDownload;