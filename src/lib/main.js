function mobileMenuToggle() {
    const mobileTrigger = document.querySelector('.mobile-trigger');

    mobileTrigger.addEventListener('click', () => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.toggle('mobile-menu-active');
    });
};

function closeMobileMenuAfterNav() {
    const navMobile = document.querySelector('.nav-mobile');

    navMobile.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            document.body.classList.remove('mobile-menu-active');
        };
    });
};

function initTabs() {
    // Get all buttons and tabs
    const buttons = document.querySelectorAll('.tabs__selectors-button');
    const tabs = document.querySelectorAll('.tabs__tabs-tab');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove "active" class from all buttons and tabs
            buttons.forEach(b => b.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            // Add "active" class to clicked button and corresponding tab
            button.classList.add('active');
            const tabSelectorFormatted = button.getAttribute('data-tab');
            const correspondingTab = document.querySelector(`.tabs__tabs-tab--${tabSelectorFormatted}`);
            correspondingTab.classList.add('active');
        });
    });
};

function initFeatures() {
    // Get all buttons and tabs
    const buttons = document.querySelectorAll('.feature-slider__feature-content');
    const tabs = document.querySelectorAll('.feature-slider__feature-image');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove "active" class from all buttons and tabs
            buttons.forEach(b => b.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            // Add "active" class to clicked button and corresponding tab
            button.classList.add('active');
            const tabSelectorFormatted = button.getAttribute('data-feature');
            const correspondingTab = document.querySelector(`.feature-slider__feature-image--${tabSelectorFormatted}`);
            correspondingTab.classList.add('active');
        });
    });
};
  
function initAccordions() {
    const accordions = document.querySelectorAll('.accordions__item button');

    accordions.forEach(function(accordionButton) {
        accordionButton.addEventListener('click', function() {
            const accordionItem = accordionButton.closest('.accordions__item');
            accordionItem.classList.toggle('open');
        });
    });
};
  
export { mobileMenuToggle, closeMobileMenuAfterNav, initTabs, initFeatures, initAccordions };