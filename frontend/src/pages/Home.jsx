import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import { isLoggedIn } from "../services";
import { AiFillCar } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";

export function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(isLoggedIn());
  }, []);
  const [vehicles, setVehicles] = useState([]);

  const [owners, setOwners] = useState([]);

  const getVehicles = async () => {
    try {
      let res = await fetch(API_URL + "/vehicles", get());
      let data = await res.json();
      setVehicles(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getOwners = async () => {
    try {
      let res = await fetch(API_URL + "/owners", get());
      let data = await res.json();
      setOwners(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // setAlert(true);
    getVehicles();
    getOwners();
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-32 my-12">
        <div>
          <h2 className="font-bold text-lg py-3">
            {user?.names} welcome to admin panel
          </h2>
        </div>
        <div className="flex">
          <Card
            icon={<AiFillCar className="my-auto mr-1 text-3xl" />}
            content={vehicles.length + " Vehicles"}
          />
          <Card
            icon={<MdOutlinePersonOutline className="my-auto mr-1 text-3xl" />}
            content={owners.length + " Owners"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
