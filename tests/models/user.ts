export class User {

    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _zipCode: string;

    constructor(zipCode: string) {
        this._firstName = 'Bas';
        this._lastName = 'Dijkstra';
        this._zipCode = zipCode;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get zipCode(): string {
        return this._zipCode;
    }
}