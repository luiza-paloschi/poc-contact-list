export type ApplicationError = {
    name: string;
    message: string;
    details?: string[];
};

export type ContactEntity = {
    id : number;
    name: string;
    phone: string;
    email: string;
}

export type Contact = Omit<ContactEntity, "id">