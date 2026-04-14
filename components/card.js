export function renderCard(title, iconClass, gradientClass, actionText) {
    return `
        <div class="card glass" style="padding: 15px; border-radius: 15px; text-align: center; transition: transform 0.2s;">
            <i class="fa ${iconClass} fa-2x" style="color: ${gradientClass}; margin-bottom: 10px;"></i>
            <h4>${title}</h4>
            <button class="btn-primary" style="margin-top: 10px; padding: 8px; font-size: 12px;">${actionText}</button>
        </div>
    `;
}
