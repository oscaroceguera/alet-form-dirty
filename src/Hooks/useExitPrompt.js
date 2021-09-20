import { useState, useEffect } from "react";

const initBeforeUnLoad = (showExitPrompt) => {
  // const handleBeforeUnload = (e) => {
  //   e.preventDefault();
  //   const message =
  //     "Are you sure you want to leave? All provided data will be lost.";
  //   e.returnValue = message;
  //   return message;
  // };

  window.onbeforeunload = (event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = "";
      }

      return "";
    }
  };
};

export default function useExitPrompt(bool) {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);

  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };

  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  useEffect(() => {
    return () => {
      initBeforeUnLoad(false);
    };
  }, []);

  return [showExitPrompt, setShowExitPrompt];
}

// useEffect(() => {
//   window.addEventListener("beforeunload", handleBeforeUnload);
//   return () => {
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//   };
// }, []);

// const handleBeforeUnload = (e) => {
//   e.preventDefault();
//   const message =
//     "Are you sure you want to leave? All provided data will be lost.";
//   e.returnValue = message;
//   return message;
// };
