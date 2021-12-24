import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";


interface IMessage{
    name: string;
    email: string;
    message: string;
}

class CreateMessageService {

    async execute({name, email, message}: IMessage){
        const messageReposotiry = getCustomRepository(MessagesRepository);

        const newMessage = messageReposotiry.create({name, email, message})

        await messageReposotiry.save(newMessage);

        if(!name){
            throw new Error("Por favor, informe um nome")
        }
        
        if(!email){
            throw new Error("Por favor, informe um e-mail!")
        }

        if(!message){
            throw new Error("Por favor, escreva uma mensagem!")
        }


        return newMessage;
    }
}

export {CreateMessageService}