function changeView(view) {
  const iframe = document.getElementById("tourFrame");

  const views = {
    entrada: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1&ss=2&sr=-1.65,.97",
    musculacao: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1&ss=5&sr=-1.13,.49&play=1&portal=1",
    inicio: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1"
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

