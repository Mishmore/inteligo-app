var render = function (root) {
  var wrapper = $('<div class="wrapper"></div>');
  root.append(wrapper);
  if(state.status == null){
    wrapper.append();
  }
}
var state = {
  status: null
}
$(function () {
  var root = document.getElementById('root');
  return render(root);
})
