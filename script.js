function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a Imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  // pegar a tag alt
  const alt = document.querySelector("#profile img")
  // substituir a mensagem de alt se tiver em light mode
    if (html.classList.contains("light")) {
      alt.setAttribute("alt", "maiky usando jaqueta preta, oculos de sol, e fundo colorido.")
  } 
  else {
    // se tiver sem light mode, manter a mensagem de alt normal
    alt.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta e fundo amarelo.")
  }

  // // função toggle
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  //   } else {
  //     html.classList.add('light')
  //   }
}