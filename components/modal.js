window.openModal = function(url) {
    const modalHtml = `
        <div id="tool-modal" style="position: absolute; top:0; left:0; width:100%; height:100%; background: var(--bg-light); z-index: 100; display:flex; flex-direction:column;">
            <div class="glass" style="height: 60px; display:flex; align-items:center; padding: 0 15px; gap: 15px;">
                <i class="fa fa-times fa-lg" style="cursor:pointer;" onclick="document.getElementById('tool-modal').remove()"></i>
                <h3 style="flex:1; margin:0;">AI Tool</h3>
            </div>
            <iframe src="${url}" style="flex:1; border:none; width:100%;"></iframe>
        </div>
    `;
    document.getElementById('modal-container').innerHTML = modalHtml;
    // Fix dark mode for modal background if active
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('tool-modal').style.background = '#121212';
    }
}
