var prevScroll=0;

window.addEventListener('load', (e) => {
    const uri = new URL(window.location.href);
    history.replaceState('', '', uri.pathname);
});

window.addEventListener('scroll', (e) => {
    const curScroll = window.scrollY;
    const profile_Y = getPosition(document.getElementById('profile')).y;
    const gallery_Y = getPosition(document.getElementById('gallery')).y;
    const product_Y = getPosition(document.getElementById('product')).y;
    const top_to_profile_Threshold=(profile_Y)/2;
    const profile_to_gallery_Threshold=(profile_Y+gallery_Y)/2;
    const gallery_to_product_Threshold=(gallery_Y+product_Y)/2;

    if(curScroll-prevScroll>0)
    {
        if (curScroll <= top_to_profile_Threshold) {        
        } else if (top_to_profile_Threshold < curScroll && curScroll <= profile_to_gallery_Threshold) {
            document.querySelector('.main-visual').classList.add('profile');
        } else if (profile_to_gallery_Threshold < curScroll && curScroll <= gallery_to_product_Threshold) {
            document.querySelector('.main-visual').classList.add('gallery');
        } else if (gallery_to_product_Threshold < curScroll) {
            document.querySelector('.main-visual').classList.add('product');
        }
    }
    else if(curScroll-prevScroll<0)
    {
        if (curScroll <= top_to_profile_Threshold) {   
            document.querySelector('.main-visual').classList.remove('profile');
        } else if (top_to_profile_Threshold < curScroll && curScroll <= profile_to_gallery_Threshold) {
            document.querySelector('.main-visual').classList.remove('gallery');
        } else if (profile_to_gallery_Threshold < curScroll && curScroll <= gallery_to_product_Threshold) {
            document.querySelector('.main-visual').classList.remove('product');
        } else if (gallery_to_product_Threshold < curScroll) {
        }
    }

    prevScroll=curScroll;
});
