document.addEventListener('DOMContentLoaded', function () {
    const cvcButton = document.getElementById('payment-tooltip-cvc');
    const cvcTooltipContent = document.getElementById('payment-tooltip-container');
    const cvcTooltipCloseButton = document.getElementById('payment-tooltip-cvc-close-button');

    const aliasButton = document.getElementById('payment-tooltip-alias');
    const aliasTooltipContent = document.getElementById('payment-tooltip-container-alias');
    const aliasTooltipCloseButton = document.getElementById('payment-tooltip-alias-close-button');

    const cobadgingButton = document.getElementById('payment-tooltip-cobadging');
    const cobadgingTooltipContent = document.getElementById('payment-tooltip-container-cobadging');
    const cobadgingTooltipCloseButton = document.getElementById('payment-tooltip-cobadging-close-button');

    function toggleTooltip(button, tooltipContent) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        isExpanded ? closeTooltip(button, tooltipContent) : expandTooltip(button, tooltipContent);
    }

    function expandTooltip(button, tooltipContent) {
        button.setAttribute('aria-expanded', 'true');
        tooltipContent.setAttribute('aria-hidden', 'false');
        tooltipContent.style.display = 'block';
        tooltipContent.style.opacity = '1';
        tooltipContent.style.zIndex = '99';
    }

    function closeTooltip(button, tooltipContent) {
        button.setAttribute('aria-expanded', 'false');
        tooltipContent.setAttribute('aria-hidden', 'true');
        tooltipContent.style.display = 'none';
        tooltipContent.style.opacity = '0';
        tooltipContent.style.zIndex = '-1';
    }

    cvcButton?.addEventListener('click', function () {
        toggleTooltip(cvcButton, cvcTooltipContent);
    });

    aliasButton?.addEventListener('click', function () {
        toggleTooltip(aliasButton, aliasTooltipContent);
    });

    cobadgingButton?.addEventListener('click', function () {
        toggleTooltip(cobadgingButton, cobadgingTooltipContent);
    });

    cvcTooltipCloseButton?.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeTooltip(cvcButton, cvcTooltipContent);
        }
    });

    aliasTooltipCloseButton?.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeTooltip(aliasButton, aliasTooltipCloseButton);
        }
    });

    cobadgingTooltipCloseButton?.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeTooltip(cobadgingButton, cobadgingTooltipCloseButton);
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            if (cvcButton?.getAttribute('aria-expanded') === 'true') {
                closeTooltip(cvcButton, cvcTooltipContent);
            }
            if (aliasButton?.getAttribute('aria-expanded') === 'true') {
                closeTooltip(aliasButton, aliasTooltipContent);
            }
            if (cobadgingButton?.getAttribute('aria-expanded') === 'true') {
                closeTooltip(cobadgingButton, cobadgingTooltipContent);
            }
        }
    });
});
