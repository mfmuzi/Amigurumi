import { Router, Request, Response} from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Bem vindo a API Shopping'})
})

router.get('/message', listMessageController.handle)
router.post('/message', createMessageController.create)


export { router }