DiscoMode = () => {
  var createStyle = function () {
    let discoBtn =!document.getElementById('turntable').getElementsByClassName('room-renderer mouse-map')[0]
    if (!discoBtn || discoBtn.classList.contains('discomode')) {
      document.getElementById('turntable').getElementsByClassName('room-renderer mouse-map')[0].classList.add('discomode');
    } else {
      document.getElementById('turntable').getElementsByClassName('room-renderer mouse-map')[0].classList.remove('discomode');
      return}
  };
  createStyle();
}
DiscoMode()