const linksRedeSocial = {
  github: 'joaopedro-wq',
  linkedin: 'in/joao-pedro-bandeira-01b83a205',

  facebook: 'joaopedro.oliveirabandeira',
  twitter: 'Chorab0y',
  instagram: 'jotapebandeira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksRedeSocial[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksRedeSocial.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      idLink.href = data.url
      idImagem.src = data.avatar_url
      idLogin.textContent = data.login
    })
}
getGithubProfileInfos()
