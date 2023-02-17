
import { router } from "./router/Router";
// import page4 from "./page/Page4";
// import home from "./page/Home";
import login from "./page/login/Login";
import Game from "./page/game/Game";


router.put("/", new login());
router.put("/game", new Game());
// router.put("/page4", page4);
// router.put("/login",  );
