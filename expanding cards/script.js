const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        reoveactive()
        panel.classList.add('active')
    })
})

function reoveactive(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}