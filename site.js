// Site de démonstration Orbitoile. Aucun cookie, aucun service extérieur.
(function () {
  // Ferme le menu du téléphone quand on choisit une rubrique.
  document.querySelectorAll('.menu-panneau a').forEach(function (lien) {
    lien.addEventListener('click', function () {
      var menu = lien.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });
  // La date de réservation ne peut pas être dans le passé.
  var date = document.getElementById('f-date');
  if (date) {
    var j = new Date();
    date.min = j.getFullYear() + '-' + String(j.getMonth() + 1).padStart(2, '0') + '-' + String(j.getDate()).padStart(2, '0');
  }
  // Démonstration : le formulaire n'envoie rien et ne garde rien.
  document.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var etat = ev.target.querySelector('.etat');
    var lg = (document.documentElement.lang || 'fr').slice(0, 2);
    var textes = {
      fr: 'Ceci est une démonstration : aucune réservation n’est envoyée ni enregistrée. Pour un site comme celui-ci, rendez-vous sur orbitoile.fr.',
      en: 'This is a demo: no booking is sent or stored. For a website like this one, visit orbitoile.fr.',
      es: 'Esto es una demostración: no se envía ni se guarda ninguna reserva. Para una web como esta, visite orbitoile.fr.'
    };
    if (etat) etat.textContent = textes[lg] || textes.fr;
  }, true);
})();
