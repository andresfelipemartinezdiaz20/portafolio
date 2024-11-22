document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById("header");
    const stickyOffset = menu.offsetTop;

    // Función que se ejecuta al hacer scroll
    function stickyMenu() {
        if (window.pageYOffset > stickyOffset) {
            menu.classList.add("sticky");  // Agrega la clase sticky cuando el menú se pega
        } else {
            menu.classList.remove("sticky"); // Elimina la clase sticky cuando el menú vuelve a su lugar
        }
    }

    // Añadir el evento de scroll
    window.onscroll = function() {
        stickyMenu();
    };

    document.getElementById('menu-toggle').addEventListener('click', function() {
        const nav = document.getElementById('nav-1');
        nav.classList.toggle('active');
    });


    new Swiper('.mySwiper', {
        breakpoints: {
          1024: {
            slidesPerView: 4,  // 4 diapositivas en pantallas grandes
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,  // 3 diapositivas en pantallas medianas
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,  // 2 diapositivas en pantallas pequeñas
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,  // 1 diapositiva en pantallas muy pequeñas
            spaceBetween: 5,
          }
        }
      });

});



$(document).ready(function() {
    console.log("jQuery cargado:", typeof $ !== 'undefined');
    console.log("Swiper cargado:", typeof Swiper !== 'undefined');

    // Verifica si el contenedor de Swiper existe
    if ($('.swiper-container').length > 0) {
        // Solo inicializa Swiper si el contenedor está presente
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop: true,
            autoplay: {
                delay: 2000,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    } else {
        console.log("Swiper no pudo inicializarse. El contenedor no fue encontrado.");
    }
});


