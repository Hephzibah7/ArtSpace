import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
};

export const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

export const zoomOut: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
};

export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -20 },
    visible: { opacity: 1, rotate: 0 },
};

export const popUp: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
};