export class NestResponse {
    status: number;
    headers: Object;
    body: object;

    constructor(resposta: NestResponse){
        Object.assign(this, resposta)
    }
}