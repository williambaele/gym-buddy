import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { WorkoutContext } from "./context/WorkoutContext";
import axios from "axios";

//PAGES
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();
  const { dispatch } = useContext(WorkoutContext);

  const [userWorkouts, setUserWorkouts] = useState([]);
  //LOAD USER'S WORKOUTS
  useEffect(() => {
    const fetchUserWorkouts = async () => {
      try {
        if (!user) {
          return;
        }

        // Replace with your backend API endpoint for fetching all workouts
        const apiUrl = "/api/workouts";

        const response = await axios.get(apiUrl);

        if (response && response.data) {
          // Filter workouts based on the current user's ID
          const userWorkouts = response.data.filter(
            (workout) => workout.user === user._id
          );

          // Dispatch the filtered workouts to the WorkoutContext
          dispatch({ type: "SET_WORKOUTS", payload: userWorkouts });
          console.log(userWorkouts.length + " UW");
          setUserWorkouts(userWorkouts);
        }
      } catch (error) {
        console.error("Error fetching user workouts:", error.message);
        // Handle the error if needed
      }
    };

    fetchUserWorkouts();
  }, [user, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <Login />
              ) : (
                <Home user={user} userWorkouts={userWorkouts} />
              )
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
