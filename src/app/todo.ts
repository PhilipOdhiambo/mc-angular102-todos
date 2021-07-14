export class Todo {
    deadline:number
    showDetail:boolean
    constructor(
        public category:string,
        public description:string,
    ) {
        this.deadline = 7;
        this.showDetail = false

    }
}

