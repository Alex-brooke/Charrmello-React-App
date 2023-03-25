import { InfoOutlined, PlayArrow, } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "cinematic" ? "Filmic" : "Audio Dramas"  }</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="romance">Romance</option>
                        <option value="sci-Fi">Sci-i</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src="https://charrmello.netlify.app/assets/imgs/stories/fire_dance.jpg" alt=""
            />
            <div className="info">
                <img 
                src="https://www.pngarts.com/files/9/Matrix-Logo-Transparent-Image.png" alt="" 
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet maxime voluptate animi! Necessitatibus non exercitationem expedita delectus ut? Facilis rem, suscipit sint pariatur eius corporis incidunt dignissimos expedita sapiente.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
