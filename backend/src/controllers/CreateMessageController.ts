import { CreateMessageService } from "../services/CreateMessageService";
import { Request, Response} from "express"


class CreateMessageController {

    async create(req: Request, res: Response) {

        const {name, email, message} = req.body;

        const createMessageService = new CreateMessageService();

        const newMessage = await createMessageService.execute({name, email, message});

        return res.json(newMessage);
    }
}

export {CreateMessageController}