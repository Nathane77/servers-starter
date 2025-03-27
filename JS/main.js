const btns = document.querySelectorAll('.gametype')

const root = document.querySelector(':root')

btns.forEach(btn =>{
    btn.addEventListener('mouseover', function(){
        root.style.setProperty("--grad1","#0065a2")
        root.style.setProperty("--grad2", "#004c88")
        root.style.setProperty("--grad3", "#00336d")
        root.style.setProperty("--grad4", "#001d52")
        root.style.setProperty("--grad5", "#030038")  
        console.log("yes")
    })

    btn.addEventListener('mouseout', function(){
        root.style.setProperty("--grad1","#00d4ff")
        root.style.setProperty("--grad2", "#009bd3")
        root.style.setProperty("--grad3", "#0065a2")
        root.style.setProperty("--grad4", "#00346d")
        root.style.setProperty("--grad5", "#030038")  
        console.log("no")
    })

    btn.addEventListener('click', function(){
        window.open(btn.id + "start.html")
        console.log(btn.id + "start.html" )
    })
})