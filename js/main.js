window.addEventListener('load', handler);

async function handler() {

    // search page ads 
    if(window.location.href.substring(0,23) === 'https://wwww.google.com/'){
        document.getElementById('tvcap').style = "display:none;";
    }


    // gmail page ads 
    if(window.location.href.substring(0,24) === 'https://mail.google.com/'){
    
        const btn = document.getElementsByClassName('aRz');
        btn[1].addEventListener('click', mailRemove);
        btn[2].addEventListener('click', mailRemove);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mailRemove() {
    await sleep(500);
    const ads = document.getElementsByClassName('AA');
    for (let i = ads.length -1; i >= 0; i--){
        ads[i].closest('tr').remove();
    }
}