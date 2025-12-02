function changeView(view) {
  const iframe = document.getElementById("tourFrame");

  const views = {
    entrada: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1&ss=2&sr=-1.65,.97",
    musculacao: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1&ss=5&sr=-1.13,.49&play=1&portal=1",
    inicio: "https://my.matterport.com/show/?m=wdSbDmbX75F&play=1&portal=1"
  };

  iframe.src = views[view];
}