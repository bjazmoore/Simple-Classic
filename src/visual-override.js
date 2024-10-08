/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = '';

    if (params.minFontSize !== '1.1' || params.maxFontSize !== '1.2') {
        output += `  
        html {
            font-size: ${params.minFontSize}rem;
            font-size: clamp(${params.minFontSize}rem, ${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 100), ${params.maxFontSize}rem);
        }`;
    }

    if (params.primaryColor !== '#D73A42') {
        output += `
      
        input[type=checkbox]:checked + label:before{
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
        }

        input[type=radio]:checked + label:before {
               background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
        

        }`;
    }

    if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }   

    if (params.heroOverlay === 'color') {
        if (params.heroOverlayColor) {
            output += `
            .hero__image--overlay::after { 
                  background: ${params.heroOverlayColor};
           }`;
        }
    }

    if (params.heroOverlay === 'gradient') {
        if (params.heroOverlayGradientDirection !== 'bottom' || params.heroOverlayGradient) {
            output += `
           .hero__image--overlay::after {              
                  background: linear-gradient(to ${params.heroOverlayGradientDirection}, transparent 0%, ${params.heroOverlayGradient} 100%);
           }`;
        }
    }
    
    if(params.galleryZoom !== true) {
        output += `   
        .pswp--zoom-allowed .pswp__img {
            cursor: default !important  
        }`;    	 
    }

    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 
        
  
    return output;
}

module.exports = generateOverride;
