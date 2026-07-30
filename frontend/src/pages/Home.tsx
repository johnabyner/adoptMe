//REACT
import { useState } from "react";
//LIBRARYS
import { DndContext, type DragEndEvent } from "@dnd-kit/core"; //DRAG AND DROP
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
//CSS
import styles from "../css/home.module.css";
//COMPONENTS
import DogCard from "../components/DogCard";
import NavBar from "../components/NavBar";
//INTERFACE
import type { Dog } from "../interfaces/Dog.interface";

//API
//https://thedogapi.com/
//2-localstorage
function Home() {
  //image of dogs,something for test
  const dogs: Dog[] = [
    {
      id: "1",
      image: "/img/dog1.webp",
    },
    {
      id: "2",
      image: "/img/dog2.webp",
    },
    {
      id: "3",
      image: "/img/dog3.webp",
    },
    {
      id: "4",
      image: "/img/dog4.webp",
    },
  ];
    //state of actual dog
    const [count, setCount] = useState(0);
    //state of favorites
    const [favorites, setFavorites] = useState<Dog[]>([]);

    function handleDragEnd(event: DragEndEvent) {
        //Will verify if will put in favorites or note
        // console.log(event.delta.x);
        const delta = event.delta.x;
        if(delta > 350){
          setFavorites((current) => [...current, dogs[count]]);
          setCount((current) => (current + 1) % dogs.length); //test
        }
        if(delta < -350){
          setCount((current) => (current + 1) % dogs.length); //test
          //queue.front()
        }
    }

    return (
        <>
            <div className={styles.container}>
                <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
                  <div className={styles.cardContainer}>
                    <DogCard key={dogs[count].id} dog={dogs[count]}/>
                  </div>
                </DndContext>
            </div>
        </>
    );
}

export default Home;