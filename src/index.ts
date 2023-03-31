import { Engine, Modifiers, Sprite } from "artistic-engine";
//import MainScene from "./scenes/main-scene";
import IntroScene from "./scenes/intro-scene";

const e = new Engine("#main");
e.resizeCanvas({w: 1920, h: 1080});

const c = new IntroScene();
e.Scene = c;

e.registerModifier(new Modifiers.SequentialModifier(
    new Modifiers.Modifier(-1, 1, 5000, (v) => {
        c.opacity = 1 - Math.abs(v);
    }, Modifiers.EaseFunctions.EaseInOutSine),
));


e.start()
