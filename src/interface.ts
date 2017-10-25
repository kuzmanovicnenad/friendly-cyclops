export type Friend = {
    name: string;
    friends: string[];
    indexedFriends?: number[]; // Uint8Array?
};

export interface Friends {
    [name: string]: Friend
}

export type Step = string;
export type Path = Step[];
