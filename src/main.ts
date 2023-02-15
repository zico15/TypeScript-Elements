
import { router } from "./router/Router";
import page4 from "./page/Page4";
import home from "./page/Home";
import login from "./page/login/Login";


router.put("/", home);
router.put("/page4", page4);
router.put("/login",  new login());
