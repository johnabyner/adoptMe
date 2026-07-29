//REACT
import { useState } from "react";
//LIBRARYS
import { DndContext, type DragEndEvent } from "@dnd-kit/core"; //DRAG AND DROP
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
//CSS
import styles from "../css/home.module.css";
//COMPONENTS
import DogCard from "../components/DogCard";
//INTERFACE
import type { Dog } from "../interfaces/Dog.interface";
import NavBar from "../components/NavBar";
//https://thedogapi.com/


function Home() {
    //image of dogs,something for test
  const [dogs] = useState<Dog[]>([
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
  ]);
    //state of actual dog
    const [count, setCount] = useState(0);
    //state of favorites
    const [favorites, setFavorites] = useState<Dog[]>([]);

    const incrementCounter = () => setCount(count+1)

    function handleDragEnd(event: DragEndEvent) {
        setCount((current) => (current + 1) % dogs.length); //test

        //queue.front()
        //Will verify if will put in favorites or note
        //console.log(event.delta.x);
        //console.log(event.delta.y);
        console.log("drag terminou");
    }

    return (
        <>
            <NavBar/>
            <div className={styles.container}>

                <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
                    {/* {dogs.map((dog) => (
                        <DogCard key={dog.id} dog={dog} />
                    ))} */}
                    <DogCard key={dogs[count].id} dog={dogs[count]}/>
                </DndContext>
            </div>
        </>
    );
}

export default Home;