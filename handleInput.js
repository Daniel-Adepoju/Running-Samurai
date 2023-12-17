 const btns = document.querySelectorAll('.btn')

export default class HandleInput {
    constructor() {
        this.keys = []
        this.lastKey = ''

        //PC
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
              btns.forEach((btn) => {
                if(btn.id === e.key) {
               btn.classList.add('active')
                }
              })
                }             
        })
        
        window.addEventListener('keyup', (e) => {
       if ((e.key ==='ArrowUp' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowLeft' ||
            e.key ==='a'||
            e.key === 'q' ||
            e.key === 'z')) {
        this.keys.splice(this.keys.indexOf(e.key), 1)
        this.lastKey = `RELEASE ${e.key}`
        btns.forEach((btn) => {
            if(btn.id === e.key) {
           btn.classList.remove('active')
            }
          })
            }
        })

        //Mobile

            btns.forEach((btn) => {
       
              btn.addEventListener('touchstart',(e) => {
                e.preventDefault()
                if ((e.target.id ==='ArrowUp' ||
                e.target.id === 'ArrowRight' ||
                e.target.id === 'ArrowLeft' ||
                e.target.id ==='a'||
                e.target.id === 'q' ||
                e.target.id === 'z')
             && this.keys.indexOf(e.target.id) === -1) {
              this.keys.push(e.target.id)
              this.lastKey = `PRESS ${e.target.id}`
              e.target.classList.add('active')
                } 
            },{passive:false})
            
                btn.addEventListener('touchend',(e) => {
                    if ((e.target.id ==='ArrowUp' ||
                    e.target.id === 'ArrowRight' ||
                    e.target.id === 'ArrowLeft' ||
                    e.target.id ==='a'||
                    e.target.id === 'q' ||
                    e.target.id === 'z')) {
             this.keys.splice(this.keys.indexOf(e.target.id),1)
                this.lastKey = `RELEASE ${e.target.id}`
                e.target.classList.remove('active')
                    } 
              },{passive:false})

 })
}
}
