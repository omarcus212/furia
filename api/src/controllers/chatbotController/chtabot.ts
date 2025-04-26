
import { Request, Response } from 'express';

const perguntasRespostas: Record<string, string> = {
    "oi": "Oi! Como posso ajudar você?",
    "quem é você?": "Eu sou um chatbot criado para ajudar você.",
    "qual seu nome?": "Meu nome é BotUI, seu assistente virtual.",
    "adeus": "Até logo!",
    "obrigado": "De nada!"
};

export const handleChatbot = (req: Request, res: Response) => {
    const { question } = req.body;

    const resposta = perguntasRespostas[question.toLowerCase()] || "Desculpe, não entendi sua pergunta.";

    res.json({ reply: resposta });
};