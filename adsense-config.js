/*
  GQNews AdSense activation:
  1. Replace the empty value with your approved Google AdSense publisher ID: ca-pub-XXXXXXXXXXXXXXXX
  2. Replace each placeholder slot ID with the matching ad-unit ID from AdSense.
  3. Update ads.txt in the site root with Google’s exact line.
  Until then, no ad script is loaded and no adverts are requested.
*/
const ADSENSE_PUBLISHER_ID = &#39;&#39;;
const AD_SLOTS = { &#39;top-leaderboard&#39;: &#39;&#39;, &#39;in-feed&#39;: &#39;&#39; };
if (/^ca-pub-\d+$/.test(ADSENSE_PUBLISHER_ID)) {
  const script=document.createElement(&#39;script&#39;); script.async=true;
  script.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
  script.crossOrigin=&#39;anonymous&#39;; document.head.appendChild(script);
  document.querySelectorAll(&#39;[data-ad-slot]&#39;).forEach(box=>{
    const slot=AD_SLOTS[box.dataset.adSlot]; if(!slot) return;
    box.innerHTML=&#39;&#39;; const unit=document.createElement(&#39;ins&#39;); unit.className=&#39;adsbygoogle&#39;; unit.style.display=&#39;block&#39;; unit.dataset.adClient=ADSENSE_PUBLISHER_ID; unit.dataset.adSlot=slot; unit.dataset.adFormat=&#39;auto&#39;; unit.dataset.fullWidthResponsive=&#39;true&#39;; box.appendChild(unit); try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}
  });
}