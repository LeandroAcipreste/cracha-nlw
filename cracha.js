const linksSocialMedia = {
  github: 'LeandroAcipreste',
  youtube: 'youtube',
  instagram: 'leoacipreste',
  facebook: 'leandroacipreste',
  twitter: 'twitter'
}
function changeSocialMediaLinks() {
  
  for( let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
   alert(li.children[0].href)
  }

}
//changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url) //Essa função recebe a resposta da API, mas, ela não sabe que é JSON
    .then(response => response.json()) // Pego a responsta da APi e informo que está no formato JSON, isso cria uma resposta que é eviada para o próximo the
    .then(data => { //essa nova arrow function, cria uma variável que armazena a resposta da URL em JSON
      userName.textContent = data.name //alterando a DOM com a resposta da API
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLink.textContent = data.login


    })
}
getGitHubProfileInfos()
