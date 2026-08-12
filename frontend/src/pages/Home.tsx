//REACT
import { useState } from "react";
//LIBRARYS
import { DndContext, type DragEndEvent, type DragMoveEvent } from "@dnd-kit/core"; //DRAG AND DROP
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
//CSS
import styles from "../css/home.module.css";
//COMPONENTS
import DogCard from "../components/DogCard";
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
    //state of swipeDirection
    const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null> (null);

    //init of drag
    function handleDragStart(){
      setSwipeDirection(null);
    }

    //ON DRAG
    function handleDragMove(event: DragMoveEvent){
      const delta = event.delta.x;

      if(delta> 350){
        setSwipeDirection("right")
      }else if(delta < -350){
        setSwipeDirection("left")
      }else{
        setSwipeDirection(null);

      }
    }

    //END
    function handleDragEnd(event: DragEndEvent) {
        const delta = event.delta.x;

        //SAVE
        if(delta > 350){
          setFavorites((current) => [...current, dogs[count]]);
          setCount((current) => (current + 1) % dogs.length); //test
        }
        //LEFT
        if(delta < -350){
          setCount((current) => (current + 1) % dogs.length); //test
          //queue.front()
        }
        setSwipeDirection(null);

    }

    return (
        <>
        {/* we have to do this if ternary because styles.swipeDirection wouldt work, because its not a class, its a variable */}
            <div className={`${styles.container} ${swipeDirection === "left" ? styles.left :
                                                   swipeDirection === "right" ? styles.right :
                                                   ""
            }`}>
                <DndContext onDragStart={handleDragStart}
                            onDragMove={handleDragMove}
                            onDragEnd={handleDragEnd} 
                            modifiers={[restrictToWindowEdges]}>
                  <div className={styles.cardContainer}>
                    <DogCard key={dogs[count].id} dog={dogs[count]}/>
                  </div>
                </DndContext>
            </div>
        </>
    );
}

export default Home;