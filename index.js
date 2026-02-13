// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  initialize();
}


else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  if (document.querySelector('.fxos-banner')) {
    // Already injected, abort.
    return;
  } else {
    var body = document.querySelector('body');
    var fxosBanner = document.createElement('div');
    fxosBanner.classList.add('fxos-banner');
    var bannerText = document.createElement('p');
    var closeBtn = document.createElement('button');

bannerText.style.position = "absolute";
bannerText.style.top = "50%";
bannerText.style.left = "50%"
bannerText.style.right = "50%";
bannerText.style.zIndex = "30000";

    bannerText.style.color = "blue";
    bannerText.style.fontFamily = "Arial";
    bannerText.style.fontSize = "larger";

    
    fxosBanner.appendChild(bannerText);
    fxosBanner.appendChild(closeBtn);
    body.appendChild(fxosBanner);

    closeBtn.textContent = 'X';
    bannerText.textContent = 'Wow, you have an extension installed!';

    closeBtn.onclick = function() {
    	fxosBanner.parentNode.removeChild(fxosBanner);
    }
  }
}
