
import { Request, Response } from 'express';

const perguntasRespostas: Record<string, string> = {
    "oi": "Oi! Como posso ajudar você?",
    "qual seu nome?": "Meu nome é BotUI, seu assistente virtual.",
    "obrigado": "De nada!",
    "quem é o capitão da furia no cs2?": "O capitão da FURIA no CS2 atualmente é o jogador 'Gabriel 'FalleN' Toledo'.",
    "a furia tem time de valorant?": "Sim, a FURIA tem um time de Valorant com jogadores como Olavo 'heat' Marcelo, Luis-Henrique 'pryze' Viveiros, Rafael 'raafa' Lima, Ilan 'havoc' Eloy e Khalil 'khalil' Schmidt.",
    "a furia tem time de rainbow six?": "Sim, a FURIA participou do Six Invitational 2025 com sua equipe de Rainbow Six Siege.",
    "a furia tem time de lol?": "Sim, a FURIA tem um time de League of Legends (LoL) com jogadores como Guigo, Tatu, Tutsz, Ayu e JoJo.",
    "a furia já ganhou algum major de cs2?": "A FURIA ainda não ganhou um Major de CS2, mas já conquistou grandes resultados como a semifinal no Major de 2019."
};

export const handleChatbot = (req: Request, res: Response) => {
    const { question } = req.body;

    const resposta = perguntasRespostas[question.toLowerCase()] || "Desculpe, não entendi sua pergunta.";

    res.json({ reply: resposta });
};