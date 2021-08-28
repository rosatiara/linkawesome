$(".topics-list a").on("click", function(e){
  if(this.hash !== ""){
    e.preventDefault()

    const topic = this.hash
    $("html, body").animate(
      {
        scrollTop: $(topic).offset().top - 70
      },
      600
    )
  }
})

const btnScrollToTop = document.querySelector("#scrollToTopBtn")

window.onscroll = function(){
  scrollWindow()}

function scrollWindow(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
    btnScrollToTop.style.display = "block"
  } 
  else {
    btnScrollToTop.style.display = "none"
  }
}

btnScrollToTop.addEventListener("click", function(){
  // window.scrollTo(0,0)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})