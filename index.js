function changeView(view) {
  const iframe = document.getElementById("tourFrame");

  const views = {
  inicio: "https://my.matterport.com/show/?m=32hoyJfC63W&play=1&brand=0",
  entrada: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=2&sr=-2.79,-.13&brand=0&play=1&portal=1&brand=0",
  corredor01: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=3&sr=-2.01,-1.09&brand=0&play=1&portal=1&brand=0",
  corredor02: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=4&sr=-2.01,-1.09&brand=0&play=1&portal=1&brand=0",
  corredor03: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=11&sr=-2.54,-.05&brand=0&play=1&portal=1&brand=0",
  musculacao01: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=10&sr=-2.54,-.05&brand=0&play=1&portal=1&brand=0",
  esteiras: "https://my.matterport.com/show/?m=32hoyJfC63W&ss=6&sr=-.85,.21&brand=0&play=1&portal=1&brand=0",
};

  iframe.src = views[view];
}

function showMenu(){
  const abrirMenu = document.getElementById('showMenu');
  const menu = document.getElementById('menu');
  const footer = document.getElementById('footer');

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    footer.style.width = '100%';
  } 
  else {
    menu.style.display = 'flex';
    footer.style.width = '89.2%';
  }
  
  
}

