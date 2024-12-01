export default function toolTip() {
  const tooltipToggleClick = document.querySelectorAll('.tooltip-toggle--clickable'),
    tooltipToggleHover = document.querySelectorAll('.tooltip-toggle--hover'),
    closeTooltip = document.querySelectorAll('.close-tooltip');

  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  const showTooltip = (element) => {
    element.classList.add('visible');
  };

  const hideTooltip = (element) => {
    element.classList.remove('visible');
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  // إضافة حدث الزر لتفعيل الوضع الداكن
  const darkModeButton = document.querySelector('.dark-mode-toggle');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }

  // Show the tooltip if the type is clickable
  if (tooltipToggleClick.length) {
    tooltipToggleClick.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.stopPropagation();
        showTooltip(element);
      });
    });
  }

  // Show the tooltip if the type is hover or click on touch devices
  if (tooltipToggleHover.length) {
    tooltipToggleHover.forEach((element) => {
      if (isTouchDevice) {
        element.addEventListener('click', (e) => {
          e.stopPropagation();
          showTooltip(element);
        });
      } else {
        element.addEventListener('mouseenter', () => {
          showTooltip(element);
        });

        element.addEventListener('mouseleave', () => {
          hideTooltip(element);
        });
      }
    });
  }

  // Hide the tooltip when the close button is clicked
  if (closeTooltip.length) {
    closeTooltip.forEach(element => {
      element.addEventListener('click', (e) => {
        e.stopPropagation();
        hideTooltip(element.parentElement.parentElement);
      });
    });
  }

  // Hide the tooltip on window click
  window.addEventListener('click', () => {
    tooltipToggleClick.forEach((element) => {
      hideTooltip(element);
    });
    tooltipToggleHover.forEach((element) => {
      hideTooltip(element);
    });
  });
}
