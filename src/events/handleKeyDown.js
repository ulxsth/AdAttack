import { InteractionState } from "../states/InteractionState.js";

const interactionState = InteractionState.getInstance();

export const handleKeyDown = (event) => {
  // プレイヤー操作
  switch (event.key) {
    case "ArrowUp":
    case "w":
      interactionState.setFlag("up", true);
      break;
    case "ArrowDown":
    case "s":
      interactionState.setFlag("down", true);
      break;
    case "ArrowLeft":
    case "a":
      interactionState.setFlag("left", true);
      break;
    case "ArrowRight":
    case "d":
      interactionState.setFlag("right", true);
      break;
  }
}
