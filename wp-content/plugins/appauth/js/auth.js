console.log(jQuery().jquery)
function getCookie(cookieName) {
	
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + '=')) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return '';
  }
  
  // Usage example
  var cookieValue = getCookie('logged_in');
console.log(cookieValue);
 

jQuery(document).ready(function($) {
 

    if(cookieValue && cookieValue == 'yes'){
        $('.LogoutButton-site').show();
        $('.LogoutButton-site').css('display', 'block');
    }else{
        $('.LogoutButton-site').remove();
    }
    $('.LogoutButton-site').on('click', function(e) {
        
        e.preventDefault();
    let url = `https://app.lizatoken.com/website-logout`;
    $('.LogoutButton-site').remove();
    let options = 'auth';
    if (typeof url === 'object') {
        options = url
        url = ''
    }
    let title = 'auth';
    options = {
        url,
        title,
        width: 600,
        height: 720,
        ...options
    }
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
    const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
    const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height
    options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
    options.top = ((height / 2) - (options.height / 2)) + dualScreenTop
    const optionsStr = Object.keys(options).reduce((acc, key) => {
        acc.push(`${key}=${options[key]}`)
        return acc
    }, []).join(',')
    const newWindow = window.open(url, title, optionsStr)
    if (window.focus) {
        newWindow.focus()
    }
    
    return newWindow
    });
});


 		document.addEventListener('DOMContentLoaded', function () {
        
        
       var button = document.getElementById('buy_liza');
			
	   var mobile_button = document.querySelector("#menu-2-b1c2567 .buy_liza_1814");
        // for mobile 

           mobile_button.addEventListener('click', function () {
			   
            var lastDate = localStorage.getItem('lastPopupDate');
    
            if (lastDate !== currentDate) {
    
                elementorProFrontend.modules.popup.showPopup({ id: '1814' });
    
            } else {
                url = 'https://app.uniswap.org/#/tokens/ethereum/0x8b227d72570d3ead66014bca8305cbef7f90d1ee';
                window.open(url, '_blank');
            }
        });


        // mobile end 
        
    
        var currentDate = new Date().toISOString().split('T')[0];
        button.addEventListener('click', function () {
            var lastDate = localStorage.getItem('lastPopupDate');
    
            if (lastDate !== currentDate) {
    
                elementorProFrontend.modules.popup.showPopup({ id: '1814' });
    
            } else {
                url = 'https://app.uniswap.org/#/tokens/ethereum/0x8b227d72570d3ead66014bca8305cbef7f90d1ee';
                window.open(url, '_blank');
            }
        });
        jQuery(document).on('click', '#liza_undestand', function() {
            localStorage.setItem('lastPopupDate', currentDate);
            jQuery('#elementor-popup-modal-1814').remove();
            
            url = 'https://app.uniswap.org/#/tokens/ethereum/0x8b227d72570d3ead66014bca8305cbef7f90d1ee';
                window.open(url, '_blank');
          });  
    });



