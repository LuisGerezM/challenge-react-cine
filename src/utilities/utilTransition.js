export const utilTransition = (transition) => {
  const transitionsTypes = {
    cardsTransition: {
      key: "cardsTransition",
      hidden: {
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      },
      visible: (custom) => ({
        opacity: 1,
        transition: {
          duration: custom.delay,
        },
      }),
    },
    pageTransition: {
      key: "pageTransition",
      in: { opacity: 1, transition: { duration: 1 } },
      out: { opacity: 0, transition: { duration: 0 } },
    },
  };

  return transitionsTypes[transition];
};
