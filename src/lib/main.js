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
  
function anotherFunction() {

};
  
export { initTabs, anotherFunction };