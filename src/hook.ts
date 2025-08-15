import { ToastManager } from './state';
import { ToastOptions, ToastProps, ToastType } from './types';

/**
 * Hook to control toasts programmatically.
 * Provides methods to show and hide toast messages.
 *
 * @returns {object} An object containing `showToast` and `hideToast` functions.
 *
 * @example
 * const { showToast, hideToast } = useToast();
 * showToast("This is an warning toast", "warning");
 */
export function useToast(): ToastProps {
  return {
    /**
     * Show a toast message.
     *
     * @param {string} message - The message to be displayed in the toast.
     * @param {ToastType} [type="warning"] - The type of toast ("warning", "success", "error").
     * @param {ToastOptions} [options] - Optional configurations like duration and animation speed.
     *
     * @example
     * showToast("Operation successful", "success", { duration: 3000 });
     */
    showToast: (
      message: string,
      type: ToastType = 'warning',
      options?: ToastOptions,
    ) => {
      // Skip empty messages
      if (!message || message.trim() === '') {
        return;
      }
      ToastManager.show(message, type, options);
    },

    /**
     * Hide the currently visible toast.
     *
     * @param {() => void} [callback] - Optional callback function that executes after the toast is hidden.
     *
     * @example
     * hideToast(() => console.log("Toast dismissed"));
     */
    hideToast: (callback?: () => void) => {
      ToastManager.hide(callback);
    },
  };
}
