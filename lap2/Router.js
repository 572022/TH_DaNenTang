import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";
import Project5 from "./project5";
import Project6 from "./project6";
import Project7 from "./project7";
import Project8 from "./project8";

const Router = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'project1', title: 'P1' },
        { key: 'project2', title: 'P2' },
        { key: 'project3', title: 'P3' },
        { key: 'project4', title: 'P4' },
        { key: 'project5', title: 'P5' },
        { key: 'project6', title: 'P6' },
        { key: 'project7', title: 'P7' },
        { key: 'project8', title: 'P8' },
      ]);
      

    const renderScene = BottomNavigation.SceneMap({
        project1: Project1,
        project2: Project2,
        project3: Project3,
        project4: Project4,
        project5: Project5,
        project6: Project6,
        project7: Project7,
        project8: Project8,
       
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default Router;
