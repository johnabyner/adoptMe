//CSS
import styles from "../css/dogCard.module.css";
//REACT
//LIBRARY
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
//INTERFACE
import type { Dog } from "../interfaces/Dog.interface";

interface DogCardProps { 
  dog: Dog;
}

function DogCard({ dog }: DogCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dog.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={dog.image}
      alt="dog"
      className={styles.img}
      style={style}
    />
  );
}

export default DogCard;

// nome da raça e idade;
// botões de like/dislike; e configuraçoes

//configuraçoes ia mostrar mais detalhes
//peso
//altura
//e descricao, deixando a tela atras em opacidade baixa