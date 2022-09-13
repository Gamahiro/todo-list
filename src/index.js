import './view/style.css';
import { controllerInit } from "./controller/controller";
import { initEvents } from "./controller/eventListeners";

function init() {
    controllerInit();
    initEvents();
}

init();


