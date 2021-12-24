import { ListMessageService } from "../services/ListMessageService";
import {Request, Response} from "express";

class ListMessageController {
    async handle (req: Request, res: Response){
        const listMessageService =  new ListMessageService();

        const allMessages = await listMessageService.execute();

        return res.json(allMessages)
    }
}

export {ListMessageController}