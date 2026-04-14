export function renderHeader() {
    return `
        <div class="glass" style="position: absolute; top: 0; width: 100%; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; z-index: 10;">
            <div style="font-weight: bold; font-size: 18px; background: var(--primary-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                AIStack Pro
            </div>
            <div style="display: flex; gap: 15px; align-items: center; font-size: 18px; cursor: pointer;">
                <i class="fa fa-moon" id="theme-toggle"></i>
                <i class="fa fa-bell" id="notif-btn"></i>
                <i class="fa fa-user-circle" id="profile-btn"></i>
            </div>
        </div>
    `;
}
