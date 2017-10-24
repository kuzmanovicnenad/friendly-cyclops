export type Friend = {
    name: string;
    friends: string[];
};

export interface Friends {
    [name: string]: Friend
}

export type Step = string;
export type Path = Step[];
