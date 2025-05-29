import React, { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMyInfo } from "../../redux/slices/appConfigSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyInfo());
  }, []);
  return (
    <div className="home">
      <NavBar />
      <div className="outlet" style={{ marginTop: "60px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
