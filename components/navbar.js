export function renderNavbar() {
    return `
        <style>
            .bottom-nav {
                position: absolute; bottom: 0; width: 100%; height: 65px; 
                display: flex; justify-content: space-around; align-items: center;
                border-top-left-radius: 20px; border-top-right-radius: 20px;
                z-index: 10;
            }
            .nav-item { display: flex; flex-direction: column; align-items: center; color: gray; cursor: pointer; font-size: 12px; }
            .nav-item.active { color: #6C63FF; }
            .nav-item i { font-size: 20px; margin-bottom: 4px; }
        </style>
        <div class="bottom-nav glass">
            <div class="nav-item active" data-page="home"><i class="fa fa-home"></i>Home</div>
            <div class="nav-item" data-page="learn"><i class="fa fa-graduation-cap"></i>Learn</div>
            <div class="nav-item" data-page="tools"><i class="fa fa-toolbox"></i>Tools</div>
            <div class="nav-item" data-page="proof"><i class="fa fa-users"></i>Proof</div>
            <div class="nav-item" data-page="support"><i class="fa fa-headset"></i>Support</div>
        </div>
    `;
}
