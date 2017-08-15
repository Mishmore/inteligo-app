function Nav(update) {
	var header = $('<header></header>');
  var nav = $('<nav class="navbar navbar-default navbar-fixed-top">');
  var container = $('<div class="container">');
  var navHeader = $('<div class="navbar-header">');
  var button = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
  var span1 = $('<span class="icon-bar"></span>');
  var span2 = $('<span class="icon-bar"></span>');
  var span3 = $('<span class="icon-bar"></span>');

  header.append(nav);
  nav.append(container);
  container.append(navHeader);
  navHeader.append(button);
  navHeader.append(span1);
  navHeader.append(span2);
  navHeader.append(span3);

  var navbarCollapse = $('<div class="navbar-collapse" id="myNavbar">');
  var ul = $('<ul class="nav navbar-nav navbar-right text-uppercase">');
  var li1 = $('<li><a href="#">acerca de inteligo sab</a></li>');
  var li2 = $('<li><a href="#">productos y servicios</a></li>');
  var li3 = $('<li><a href="#">mercado al día</a></li>');
  var li4 = $('<li><a href="#">servicio al cliente</a></li>');

  container.append(navbarCollapse);
  navbarCollapse.append(ul);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);

  // <header>
	// 		<nav class="navbar navbar-default navbar-fixed-top">
	// 			<div class="container">
	// 				<div class="navbar-header">
	// 					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 					</button>
	// 				</div>
	// 				<div class="navbar-collapse" id="myNavbar">
	// 					<ul class="nav navbar-nav navbar-right text-uppercase">
	// 						<li><a href="#">acerca de inteligo sab</a></li>
	// 						<li><a href="#">productos y servicios</a></li>
	// 						<li><a href="#">mercado al día</a></li>
	// 						<li><a href="#">servicio al cliente</a></li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 		</nav>
	// 	</header>

	return header;
}
