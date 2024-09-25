export const trapFocus = (
  e: React.FocusEvent<HTMLDivElement>,
  isOpen: boolean
) => {
  if (isOpen) {
    const modalContent = e.currentTarget;
    const focusableElements = modalContent.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    };

    modalContent.addEventListener("keydown", handleFocus);

    return () => {
      modalContent.removeEventListener("keydown", handleFocus);
    };
  }
};
