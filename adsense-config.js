/* Add your approved ca-pub publisher ID and matching ad-unit IDs below to enable advertising. */
const ADSENSE_PUBLISHER_ID = "";
const AD_SLOTS = { "top-leaderboard": "", "in-feed": "" };
if (/^ca-pub-\d+$/.test(ADSENSE_PUBLISHER_ID)) {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_PUBLISHER_ID;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
  document.querySelectorAll("[data-ad-slot]").forEach((box) => {
    const slot = AD_SLOTS[box.dataset.adSlot];
    if (!slot) return;
    box.innerHTML = "";
    const unit = document.createElement("ins");
    unit.className = "adsbygoogle";
    unit.style.display = "block";
    unit.dataset.adClient = ADSENSE_PUBLISHER_ID;
    unit.dataset.adSlot = slot;
    unit.dataset.adFormat = "auto";
    unit.dataset.fullWidthResponsive = "true";
    box.appendChild(unit);
    try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (error) {}
  });
}
