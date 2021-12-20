document.addEventListener('DOMContentLoaded', event => {
  const cf7List = document.querySelectorAll('.wpcf7');

  cf7List.forEach(cf7 => {
    const cf7Form = cf7.querySelector('.wpcf7-form');
    let sendingForm = false;

    cf7Form.addEventListener('submit', function(e) {
      jQuery(cf7Form).find('.wpcf7-submit').attr('disabled', true);
    });

    cf7.addEventListener('wpcf7submit', function(e) {
      jQuery(cf7Form).find('.wpcf7-submit').attr('disabled', false);
    });
  });
});