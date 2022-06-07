export class Shape {
    private name : string;
    private color : string;
    constructor ( name : string, color : string) {
        this.name = name;
        this.color = color;
    }
    public getName () : string {
        return this.name;
    }
    public setName(name : string) : void {
        this.name = name;
    }
    public getColor() : string{
        return this.color;
    }
    public setColor(color : string) : void {
        this.color = color;
    }
}