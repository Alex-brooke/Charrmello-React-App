import Featured from "../../components/feature/Featured.jsx";
import List from "../../components/list/List.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios"

const Home = ({ type }) => {
    const [lists, setList] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `lists${type ? "?type=" + type : ""}${genre ? "genre=" + genre : ""
                    }`,
                    {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGQ2OTk3NDRkYjg1MWQxNDEyMjExOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODU0MzgxNywiZXhwIjoxNjMxMTM1ODE3fQ.jtI8KhW0X4b5a6Mnuux0Mc7NEbPa0Df9tOK3MF1GmfI"
                        }
                    }
                );
                setList(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list) => (
                <List list={list} />
            ))}

        </div>
    );
};

export default Home
