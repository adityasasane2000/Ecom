import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../authAPI";
import { selectUser, signoutuserAsync } from "../authSlice";
import { Navigate } from "react-router-dom";


function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log(user);

    useEffect(()=>{
        dispatch(signoutuserAsync(user.id));
    },[user]);

    return (
        <>
            {!user && <Navigate to={"/"}></Navigate>}
        </>
    );
}

export default Logout;