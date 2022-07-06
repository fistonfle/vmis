import React, { useState, useEffect } from "react";
import { Alert, Form, Tabber } from "../components";
import CreateVehicleModal from "../components/modals/CreateVehicleModal";
import { API_URL, get } from "../utils/common.util";

export function VehiclesPage() {
  const [response, setResponse] = useState(null);
  const [alert, setAlert] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = async () => {
    try {
      let res = await fetch(API_URL + "/vehicles", get());
      let data = await res.json();
      setVehicles(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const [form, setForm] = useState({
    meterNumber: "",
    amount: "",
  });

  const closeAlert = () => {
    setAlert(false);
    setResponse(null);
  };

  useEffect(() => {
    // setAlert(true);
    getVehicles();
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-32 my-12">
        <section className={"container mt-5"}>
          {alert ? (
            <Alert
              success={response?.success}
              handleClose={closeAlert}
              message={`${response?.message}`}
            />
          ) : null}
          <div className="mx-6">
            <div className="mb-5 flex justify-end">
              <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                data-modal-toggle="createVehiclesModal"
              >
                + Vehicle
              </button>
            </div>
            <div class="relative overflow-x-auto sm:rounded-sm">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      #
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Chasis Number
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Model Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Manufacture Company
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Manufacture Year
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Assign</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle, i) => (
                    <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <td class="px-6 py-4">{i + 1}</td>

                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {vehicle.chasisNumber}
                      </th>
                      <td class="px-6 py-4">{vehicle.modelName}</td>
                      <td class="px-6 py-4">{vehicle.company}</td>
                      <td class="px-6 py-4">{vehicle.year}</td>
                      <td class="px-6 py-4">{vehicle.price}</td>
                      <td class="px-6 py-4 text-right">
                        <button
                          type="button"
                          data-modal-toggle="assignOwnersModal"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Assign Owner
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* {modales} */}
      <div
        id="createVehiclesModal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <CreateVehicleModal />
      </div>
    </React.Fragment>
  );
}
