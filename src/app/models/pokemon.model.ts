export interface PokemonAPICall {
    count: number;
    next: string;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
    num: number;
}
