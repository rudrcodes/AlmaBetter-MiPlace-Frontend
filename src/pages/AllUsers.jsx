import React, { useEffect, useState } from "react";
import { FavoritesPlaceCardComponent } from "../components/FavoritesPlaceCardComponent";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API } from "../backend";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "../components/styles.css";

console.log("api is", API);

export const AllUsers = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("localUser"));

    const [fetchText, setFetchText] = useState("Fetch all the users");

    if (!loggedInUser.admin) {
        navigate("/home")
    }
    // let currUser = useSelector((state) => state.userFeature.favHotel);

    const [allUsers, setAllUsers] = useState([]);
    //delete users (✅)
    const deleteUser = async (id, name) => {
        try {
            const res = await axios.post(`${API}/deleteUser`, { id, name });
            console.log(res.data);
            window.location.reload();

        } catch (error) {
            alert(error)
        }
    }
    // and to make  a user a admin
    const updateUser = async (id, name) => {
        const res = await axios.put(`${API}/updateUser`, { id })
        window.location.reload();
        fetchAllUsers()
        console.log(res.data);
    }


    //func to fetch all users (✅)
    const fetchAllUsers = async () => {
        setFetchText("Fetching ... 🔃")
        const res = await axios.get(`${API}/allUsers`)
        setAllUsers(res.data)
        console.log(res.data);
        setFetchText("Fetch all the users")

    }


    useEffect(() => {
        const fetchAllUsers = async () => {
            const res = await axios.get(`${API}/allUsers`)
            setAllUsers(res.data)
            console.log(res.data);
        }
        fetchAllUsers();
    }, []);


    return (
        <div className=" flex justify-center items-center flex-col font-mullish py-3">
            <ToastContainer />
            <div className="  w-10/12 mt-4">
                <div className="flex  items-center rounded-lg w-full  px-6 py-4 shadow-lg mb-6 font-mullish">
                    <div className=" border-l-2	border-gray-400 pl-2">
                        <p className="text-bolder font-mullish text-xl">Total Users</p>
                        <p className="text-gray-600 font-mullish text-bolder ">
                            {allUsers?.length || 0}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col bg-gray-300 rounded-lg">
                    <div className="md:text-3xl rounded-lg my-3  flex justify-center items-center p-4 text-bold  bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2">
                        All Users 👤
                    </div>
                    <button className="bg-red-600 border-4 p-3 hover:-translate-y-1 hover:scale-105 hover:bg-red-900 duration-300 text-white my-2" onClick={fetchAllUsers}>{fetchText}</button>
                    <div id="users" className="flex justify-center items-center flex-col">
                        
                       {allUsers.length>0 && allUsers[0]?.name && <div>{allUsers[0].name}</div>}
                       {allUsers.length > 0 && allUsers.map((user) => {
                            return (
                                <div key={user._id} className="flex justify-center items-center flex-col bg-blue-500 border-2 py-5 px-4 w-[300px] m-2 rounded-lg hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2">
                                    <div className="text-center flex justify-center items-center flex-col ">
                                        <div className="text-bolder">
                                            username : <span className="text-bold ">{user.name}</ span>
                                        </div>
                                        <div className="text-bolder">
                                            email : <span className="text-bold  overflow-hidden  truncate">{user.email}</ span>
                                        </div>
                                        <br />

                                        {user.admin != true &&
                                            <button onClick={() => deleteUser(user._id, user.name)} className={"bg-red-200 p-2 my-1 hover:-translate-y-1 hover:scale-105 hover:bg-red-400 duration-300 text-white my-2"} >Delete user</button>}

                                        {user.admin != true &&
                                            <button onClick={() => updateUser(user._id, user.name)} className={"bg-red-600 p-2 my-1bg-red-500 hover:-translate-y-1 hover:scale-105 hover:bg-red-900 duration-300 text-white my-2"} >Make them admin</button>}
                                        {user.admin == true &&
                                            <span className="disabled bg-gray-100 p-2 cursor-arrow font-mullish text-bolder text-l text-black">Status -> Admin</span>}
                                    </div>
                                </div>

                            );
                        })}


                    </div>
                </div>
            </div>
        </div>
    );
};
