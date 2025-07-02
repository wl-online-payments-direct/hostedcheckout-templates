document.addEventListener('DOMContentLoaded', function () {
    const cvcButton = document.getElementById('payment-tooltip-cvc');
    const cvcTooltipContent = document.getElementById('payment-tooltip-container');

    const aliasButton = document.getElementById('payment-tooltip-alias');
    const aliasTooltipContent = document.getElementById('payment-tooltip-container-alias');

    const cardholderNameError = document.getElementById('payment-cardholdername-error');
    const cardNumberError = document.getElementById('payment-cardnumber-error');
    const cvcError = document.getElementById('payment-cvc-error');
    const paySecurelyButton = document.getElementById('submit-all');
    const paySecurelyButtonMobile = document.getElementById('payment-submit-switch-mobile');

    const parent = document.querySelector('div.order-summary.orderpart');
    const orderSummary = parent.querySelector('div.accordion.order-summary__content');
    const surchargeTable = document.querySelector('table.order-summary.dcc-input-table');
    const paymentPart = document.querySelector('.paymentpart');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.center.footer');

    function toggleTooltip(button, tooltipContent) {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            tooltipContent.style.display = 'none';
            tooltipContent.style.opacity = '0';
            tooltipContent.style.zIndex = '-1';
            button.setAttribute('aria-expanded', 'false');
            tooltipContent.setAttribute('aria-hidden', 'true');
        } else {
            tooltipContent.style.display = 'block';
            tooltipContent.style.opacity = '1';
            tooltipContent.style.zIndex = '99';
            button.setAttribute('aria-expanded', 'true');
            tooltipContent.setAttribute('aria-hidden', 'false');
        }
    }

    cvcButton?.addEventListener('click', function () {
        toggleTooltip(cvcButton, cvcTooltipContent);
    });

    aliasButton?.addEventListener('click', function () {
        toggleTooltip(aliasButton, aliasTooltipContent);
    });

    addEventListener(paySecurelyButtonMobile, 'touchstart', function () {
        refreshFieldAlerts();
    });

    addEventListener(paySecurelyButton, 'click', function () {
        refreshFieldAlerts();
    });

    function refreshFieldAlerts() {
        refreshAlertContent(cardholderNameError);
        refreshAlertContent(cvcError);
        refreshAlertContent(cardNumberError);
    }

    function refreshAlertContent(elementWithErrorMessage) {
        let message = elementWithErrorMessage.innerHTML;
        if (message !== "") {
            elementWithErrorMessage.innerHTML = "";
            elementWithErrorMessage.innerHTML = message;
        }
    }

    function addEventListener(element, event, callback) {
        element?.addEventListener(event, callback);
    }

    setDesktopViewHeight();

    function setDesktopViewHeight() {
        if ((paymentPart.offsetHeight < orderSummary.offsetHeight && mainContent.offsetHeight < orderSummary.offsetHeight) || surchargeTable !== null) {
            let mainContentHeight = getMainContentHeight();
            document.documentElement.style.setProperty('--box-height', (mainContentHeight) + 'px');
        }
    }

    function getMainContentHeight() {
        if (surchargeTable !== null) {
            return mainContent.offsetHeight * 1.1;
        } else {
            return orderSummary.offsetHeight + footer.offsetHeight;
        }
    }
});
