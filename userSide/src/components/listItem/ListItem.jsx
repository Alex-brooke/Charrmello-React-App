import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItem.scss";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [cinematic, setCinematic] = useState({});


    useEffect(() => {
        const getCinematic = async () => {
            try {
                const res = await axios.get("/cinematics/find/" + item, {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGQ2OTk3NDRkYjg1MWQxNDEyMjExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODYwNjY1NCwiZXhwIjoxNjMxMTk4NjU0fQ.O4VfqTxnkI5sQtY7YQccNHJDe5CqMbViXen0lse9EN4"
                    },
                });
                setCinematic(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCinematic()
    }, [item]);

    return (
        <Link to={{ pathname: "/listen", cinematic: cinematic }}>
            <div className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={cinematic.img}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={cinematic.trailer} autoPlay={true} loop></video>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon" />
                                <Add className="icon" />
                                <ThumbUpAltOutlined className="icon" />
                                <ThumbDownAltOutlined className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{cinematic.duration}</span>
                                <span className="limit">{cinematic.limit}</span>
                                <span>{cinematic.year}</span>
                            </div>
                            <div className="desc">
                                {cinematic.desc}
                            </div>
                            <div className="genre">
                                {cinematic.genre}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}
