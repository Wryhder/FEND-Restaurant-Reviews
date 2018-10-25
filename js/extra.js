// Loop through all anchors on attribution section of map
// and take them out of tab order
window.addEventListener('load', function (event) {
    const attributionAnchors = document.querySelectorAll('.leaflet-control-attribution a');
    attributionAnchors.forEach((anchor) => anchor.tabIndex = -1);
});