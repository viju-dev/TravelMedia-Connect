import React, {useState,useEffect} from "react"; 
// import {postFetching, postFetchSuccess, postFetchError} from "../redux/actions/postActions";
import {fetchPost} from "../redux/actions/postActions";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

//MY IMPORT
import SearchBar from "./SearchBar";
import {FiChevronRight} from "react-icons/fi";
import { useNavigate } from "react-router-dom";



const Home = ({setSelectPost,selectPost,children}) => {

    const {loading, data, error} = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(loading, data, error);

    let navigate = useNavigate()
    useEffect(
        () => {
            dispatch(fetchPost())
            console.log("IN HOME",setSelectPost);
        },[]
    )
    function selectItem(item){
        console.log("ho gya print",item);
        
        setSelectPost((selectPost) => [...selectPost,item]);
        navigate(`/item/${item.id}`)
    }


    // MY CODE
    // console.log(props);
    return (
        <div className="homeContainer">
            {children}
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
                        <div className="btnContainer">
                            <button onClick={()=> selectItem(item)}>{<FiChevronRight/>}</button>
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