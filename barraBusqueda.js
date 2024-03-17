document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
      const searchTerm = document.getElementById("buscador").value.toLowerCase();
      let found = false;

      document.querySelectorAll(".txtplanta").forEach(txtplanta => {
          if (txtplanta.textContent.toLowerCase().includes(searchTerm)) {
              document.querySelectorAll(".Imgplanta").forEach(planta => {
                  if (planta.id.toLowerCase().includes(searchTerm)) {
                      planta.scrollIntoView();
                      found = true;
                  }
              });
          }
      });

      if (!found) {
          alert("No se encontró ninguna coincidencia.");
      }
  }
});

/*document.addEventListener("dblclick", e=>{

    if (e.target.matches("#buscador")){  

        document.querySelectorAll(".txtplanta").forEach(txtplanta =>{
           txtplanta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?document.querySelectorAll(".Imgplanta").forEach(planta =>{
                planta.id.toLowerCase().includes(e.target.value.toLowerCase())
                ?planta.scrollIntoView()
                :alert("no")
            })
            :alert("hola no jalo")
        })
    }
  })*/

  
  /*if (e.target.matches("#buscador")){  

    document.querySelectorAll(".txtplanta").forEach(fruta =>{
       fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?fruta.scrollIntoView()
        :alert("hola no jalo")
       
    })
}
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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