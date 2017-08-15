function Loading() {
  var container = $('<div class="container-fluid question"></div>');
  var divAzul = $('<div class="helper hidden-xs"></div>');
  var logoDiv = $('<div class="logo-div"></div>');
  var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
  var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

  var divLoad = $('<div class="loading-div"></div>');
  var loading = $('<div class="progress "></div>');
  var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:100%"><span class="sr-only">100% Complete</span></div>');
  var containerGif = $('<div class="center-block"></div>');
  var loadingGif = $('<img src="assets/img/loading.gif">');

  container.append(divAzul);
  divAzul.append(logoDiv);
  divAzul.append(divLoad);
  divAzul.append(containerGif);
  divLoad.append(loading);
  loading.append(loadingBase);
  logoDiv.append(img,h2);
  containerGif.append(loadingGif);
  return container;
}
