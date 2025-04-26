export interface Game {
    id?: number,
    game: string;
    event: string;
    first_team: string;
    seconde_team: string;
    scoreboard_first_team: number;
    scoreboard_seconde_team: number;
    date: Date;
}