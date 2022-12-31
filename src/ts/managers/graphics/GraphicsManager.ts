export class GraphicsManager {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        let _canvas = document.querySelector("canvas");
        if(!_canvas){
            throw new Error("Failed to grab canvas!");
        }
        this.canvas = _canvas;
        
        let _ctx = this.canvas.getContext('2d');
        if(!_ctx){
            throw new Error("Failed to load context2D!");
        }
        this.ctx = _ctx;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(10, 10, 32, 32);
    }
}