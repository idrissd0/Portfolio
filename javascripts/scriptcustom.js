
function Menu(e){
    let ul = document.getElementById('burger-menu');
    let arrow = document.getElementById('arrowdown');
    e.name === 'menu' ? (
      e.name = "close", 
      ul.classList.remove('xs:hidden'),
      ul.classList.remove('sm:hidden'),
      ul.classList.add('xs:absolute'),
      ul.classList.add('sm:absolute'),
      arrow.classList.add('hidden')
      ) : (
        e.name = "menu" ,
        ul.classList.remove('xs:absolute'),
        ul.classList.remove('sm:absolute'),
        ul.classList.add('xs:hidden'),
        ul.classList.add('sm:hidden'),
        arrow.classList.remove('hidden')
        )

  }

  var btn = document.getElementById('btn');
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('TEST');
    
  })

  