import { User } from '../user/user.class';

export class Prchrequest {
    
    id: number;
    user: User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;

    constructor() {
        this.id = 0;
        
    }
}
