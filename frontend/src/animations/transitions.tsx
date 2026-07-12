export const smooth = {
    duration: 0.6,
};

export const slow = {
    duration: 1,
};

export const fast = {
    duration: 0.3,
};

export const spring = {
    type: "spring",
    stiffness: 120,
    damping: 12,
} as const; //why const here and not in any other transition because typescript was considering it string otherwise type string

export const bouncy = {
    type: "spring",
    stiffness: 220,
    damping: 10,
};