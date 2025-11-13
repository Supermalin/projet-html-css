document.addEventListener('DOMContentLoaded', () => { //attendre que l'element soit charger sur le site
  const cursor = document.querySelector('.cursor');

  let souris_x = 0; let souris_y = 0;
  let div_x = 0; let div_y = 0;

  const vitesse = 0.1;

  const position_souris = (x, y) => { //position de la souris dans les variable
    souris_x = x;
    souris_y = y;   
  };

  document.addEventListener('mousemove', (e) => { //quand la souris bouge la position de la souris est actualisé
    position_souris(e.clientX, e.clientY);
  });

  const animation = () => { //deplacement vers le curseur
    div_x += (souris_x - div_x) * vitesse; div_y += (souris_y - div_y) * vitesse; //changement des variables js
    cursor.style.left = `${div_x}px`; cursor.style.top = `${div_y}px`; //changement de la position sur le css
    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation); //lance la boucle d'anniamtion
});