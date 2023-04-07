import { createUseStyles } from "react-jss";
import { theming } from "../homework/providerJSS/themeProvider";

export const useStylesModal = createUseStyles(
    {
        modal: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0 ,0, 0.4)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            pointerEvents: "none",
            transition: "0.5s",
        },
        active: {
            zIndex: 2,
            opacity: 1,
            pointerEvents: "all",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0 ,0, 0.4)",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.5s",
        },
        modalContent: {
            width: "80vw",
            height: "30vw",
            padding: "0 20px 20px 20px",
            borderRadius: "12px",
            backgroundColor: ({ theme }) => theme.background,
            transform: "scale(0.5)",
            transition: "0.4s all",
            overflow: "hidden",
            overflowY: "scroll",
            "&": {
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    width: "16px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "#19191d",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#25252b",
                    borderRadius: "8px",
                },
            },
        },
        modalContentActive: {
            transform: "scale(1.0)",
            width: "80vw",
            height: "30vw",
            padding: "0 20px 20px 20px",
            borderRadius: "12px",
            backgroundColor: ({ theme }) => theme.background,
            transition: "0.4s all",
            overflow: "hidden",
            overflowY: "scroll",
            "&": {
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    width: "16px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: ({ theme }) => theme.background,
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: ({ theme }) => theme.backgroundElement,
                    borderRadius: "8px",
                },
            },
        },
    },
    { theming }
);