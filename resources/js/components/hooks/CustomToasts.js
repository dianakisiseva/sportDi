const { useToasts } = require("react-toast-notifications");

export function useSuccessToast() {
    const { addToast } = useToasts()

    return (message) => {
        addToast(message, { appearance: 'success', autoDismiss: true })
    }
}   