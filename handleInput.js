export default class HandleInput {
    constructor() {
        this.keys = []
        this.lastKey = ''
        window.addEventListener('keydown', (e) =>{
           if ((e.key ==='ArrowUp' ||
                e.key === 'ArrowRight' ||
                e.key === 'ArrowLeft' ||
                e.key ==='a'||
                e.key === 'q' ||
                e.key === 'z' ||
                e.key === 's')
             && this.keys.indexOf(e.key) === -1) {
              this.keys.push(e.key)
              this.lastKey = `PRESS ${e.key}`
                }             
        })
        
        window.addEventListener('keyup', (e) => {
       if ((e.key ==='ArrowUp' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowLeft' ||
            e.key ==='a'||
            e.key === 'q' ||
            e.key === 'z' ||
            e.key === 's')) {
        this.keys.splice(this.keys.indexOf(e.key), 1)
        this.lastKey = `RELEASE ${e.key}`
            }
        })
    }
}