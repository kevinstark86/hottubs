// ********* Glider.js Start ***********//

new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    autoplay: 1500,
    exactWidth: true,
     breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
    

}).mount()

// *********** Glider.js End *********** //