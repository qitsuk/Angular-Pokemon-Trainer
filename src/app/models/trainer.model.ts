export interface Trainer {
    id: number;
    username: string;
    pokemon: PokemonCollection;
}

export interface PokemonCollection {
    name: string;
}