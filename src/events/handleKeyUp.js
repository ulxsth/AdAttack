import { InteractionState } from "../states/InteractionState.js";

const interactionState = InteractionState.getInstance();

export const handleKeyUp = (event) => {
  console.log("keyup: " + event.key);
  switch (event.key) {
    case "ArrowUp":
    case "w":
      interactionState.setFlag("up", false);
      break;
    case "ArrowDown":
    case "s":
      interactionState.setFlag("down", false);
      break;
    case "ArrowLeft":
    case "a":
      interactionState.setFlag("left", false);
      break;
    case "ArrowRight":
    case "d":
      interactionState.setFlag("right", false);
      break;
  }
}
