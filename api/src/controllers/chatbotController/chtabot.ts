
import { Request, Response } from 'express';

const perguntasRespostas: Record<string, string> = {
    "oi": "Oi! Como posso ajudar você?",
    "olá": "Oi! Como posso ajudar você?",
    "ola": "Oi! Como posso ajudar você?",
    "quem é você?": "Eu sou um chatbot criado para ajudar você.",
    "qual seu nome?": "Meu nome é BotUI, seu assistente virtual.",
    "adeus": "Até logo!",
    "obrigado": "De nada!",
    "vlw": "De nada!"!,
    "quem é o capitão da furia no cs2?": "O capitão da FURIA no CS2 atualmente é o jogador 'Gabriel 'FalleN' Toledo'.",
    "quais jogadores fazem parte da furia no cs2?": "Os jogadores atuais da FURIA no CS2 são: Gabriel 'FalleN' Toledo, Yuri 'yuurih' Santos, Kaike 'KSCERATO' Cerato, Danil 'molodoy' Golubenko e Mareks 'YEKINDAR' Gaļinskis (stand-in).",
    "qual foi a maior conquista da furia no cs2?": "A maior conquista da FURIA no CS2 até agora foi a classificação para a semifinal do PGL Bucharest 2025.",

    "a furia tem time de futsal?": "Sim, a FURIA tem um time de Futsal, que participou do Campeonato Paulista de Futsal 2025.",
    "quais jogadores fazem parte do time de futsal da furia?": "Jogadores como Penelope Clayton têm se destacado no time de futsal da FURIA.",

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