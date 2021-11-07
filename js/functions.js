document.addEventListener('DOMContentLoaded', event => {
  const cf7List = document.querySelectorAll('.wpcf7');

  cf7List.forEach(cf7 => {
    const cf7Form = cf7.querySelector('.wpcf7-form');
    let sendingForm = false;

    cf7Form.addEventListener('submit', function(e) {
      if (sendingForm) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    });

    cf7.addEventListener('wpcf7beforesubmit', function(e) {
      sendingForm = true;
    });

    cf7.addEventListener('wpcf7submit', function(e) {
      sendingForm = false;
    });
  });
});
