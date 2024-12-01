class BasePage {
  constructor() {
    this.isDarkMode = false;
  }

  onReady() {
    this.setupDarkModeToggle();
  }

  setupDarkModeToggle() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.toggleDarkMode();
      });
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    app.log(`Dark mode is now ${this.isDarkMode ? 'enabled' : 'disabled'}.`);
  }

  registerEvents() {
    //
  }

  /**
   * To avoid loading unwanted classes, unless it's wanted page
   * @param {null|string[]} allowedPages
   * @return {*}
   */
  initiate(allowedPages) {
    if (allowedPages && !allowedPages.includes(salla.config.get('page.slug'))) {
      return app.log(`The Class For (${allowedPages.join(',')}) Skipped.`);
    }

    this.onReady();
    this.registerEvents();
    app.log(`The Class For (${allowedPages?.join(',') || '*'}) Loaded🎉`);
  };
}

/**
 * Because we merged multi classes into one file, there is no need to initiate all of them
 */
BasePage.initiateWhenReady = function (allowedPages = null) {
  if (window.app?.status === 'ready') {
    (new this).initiate(allowedPages);
  } else {
    document.addEventListener('theme::ready', () => (new this).initiate(allowedPages))
  }
}

export default BasePage;
