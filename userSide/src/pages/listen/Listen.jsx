import { ArrowBackIos } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import "./listen.scss";

export default function Listen() {
    const location = useLocation();
    const cinematic = location.cinematic;
    return (
        <div className="listen">
            <div className="back">
                <ArrowBackIos />
                Home
            </div>
            <video
                className="audio" autoPlay progress controls src={cinematic.audio}/>
        </div>
    )
}
