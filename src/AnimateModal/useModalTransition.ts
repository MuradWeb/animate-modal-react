import { useEffect, useState } from "react";
export const useModalTransition = (
  isOpen: boolean,
  overMS: number,
  boxMS: number,
) => {
  const [open, setOpen] = useState(false);
  const [overShow, setOverShow] = useState(false);
  const [boxShow, setBoxShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setTimeout(() => {
        setOverShow(true);
        setTimeout(() => setBoxShow(true), boxMS);
      }, overMS);
    } else {
      setBoxShow(false);
      setTimeout(() => {
        setOverShow(false);
        setTimeout(() => setOpen(false), overMS);
      }, boxMS);
    }
  }, [isOpen, overMS, boxMS, setOpen, setOverShow, setBoxShow]);

  return {
    opened: open,
    overShow,
    boxShow,
  };
};
