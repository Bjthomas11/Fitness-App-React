import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../../components/Banner/Banner";
import SearchExercises from "../../components/SearchExercises/SearchExercises";
import Exercises from "../../components/Exercises/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <Banner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
