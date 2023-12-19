import { ReactNode, useCallback } from "react";
import { createPortal } from "react-dom";
import { useStyles } from "./styles";
import { useModalTransition } from "./useModalTransition";

interface ModalProps {
  isOpen: boolean;
  effect: string;
  children: ReactNode;
  overClose?: () => void;
}

export const AnimateModal = (props: ModalProps) => {
  const { isOpen, children, overClose }: ModalProps = props;
  const classes = useStyles(props);
  const { opened, overShow, boxShow } = useModalTransition(isOpen, 300, 300);
  const handleOverClose = useCallback(() => {
    overClose && overClose();
  }, []);

  const content = (
    <div
        onClick={handleOverClose}
        className={[classes.modal, overShow ? classes.fadeIn : ""].join(" ")}
    >
      <div className={[classes.box, boxShow ? classes.showBox : ""].join(" ")}>
        {children}
      </div>
    </div>
  );

  return !opened ? null : createPortal(content, document.body);
};
