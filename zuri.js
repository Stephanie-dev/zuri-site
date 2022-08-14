const accordion = document.getElementsByClassName ('contentx');

for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}


document.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.hasAttribute('data-toggle') &&
      target.getAttribute('data-toggle') == 'modal') {
      if (target.hasAttribute('data-target')) {
          var m_ID = target.getAttribute('data-target');

          document.getElementById(m_ID).classList.add('open');
          e.preventDefault();
      }
  }

  if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
      var modal =
          document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
  }
}, false);

document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      console.log(e)
      document.querySelector('close').click();
  }
});
