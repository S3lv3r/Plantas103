document.addEventListener("dblclick", e=>{

    if (e.target.matches("#buscador")){  

        document.querySelectorAll(".Imgplanta").forEach(fruta =>{
           fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?alert("hola si jalo"):alert("hola no jalo")
           
        })
    }
  })

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*function scrollToItem(index) {
    const itemList = document.getElementById("item-list");
    const item = itemList.getElementsByTagName("li")[index - 1];
    item.scrollIntoView();
  }

  if (e.key ==="Escape")e.target.value = ""
  
  document.querySelectorAll(".ImgPlanta").forEach(fruta =>{
      
        fruta.id.toLowerCase().includes(e.target.value.toLowerCase())
        ?fruta.scrollIntoView()
        :alert("No existe")
  })*/