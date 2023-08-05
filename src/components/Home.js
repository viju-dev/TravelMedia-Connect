import React, {useEffect} from "react"; 
// import {postFetching, postFetchSuccess, postFetchError} from "../redux/actions/postActions";
import {fetchPost} from "../redux/actions/postActions";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

//MY IMPORT
import SearchBar from "./SearchBar";
import {FiChevronRight} from "react-icons/fi";


const Home = (props) => {

    const {loading, data, error} = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(loading, data, error);


    useEffect(
        () => {
            dispatch(fetchPost())
        },[]
    )

    // MY CODE
    // console.log(props);
    return (
        <div className="homeContainer">
            <h3 className="title">Social Media For Travellers</h3>
            {props.children}
            <div className="listContainer">
                <div className="cardGrid">
                {
                    data &&
                    data.map((item,index)=>(
                        <div className="postCard">
                    <img src={`https://picsum.photos/200?random=${item.id}`}></img>
                    <div className="cardTitle">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="descContainer">
                        <div className="description">
                            {item.body}
                        </div>
                        <div>
                            <button>{<FiChevronRight/>}</button>
                        </div>
                    </div>
                </div>
                    ))
                }
                </div>
               

            </div>
        </div>
    )
}

export default Home;