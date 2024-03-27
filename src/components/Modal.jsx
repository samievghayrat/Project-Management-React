import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Modal = forwardRef(
    function Modal({ children, buttonCaption }, ref) {
        const [isOpen, setIsOpen] = useState(false);
        const dialog = useRef();

        useImperativeHandle(ref, () => ({
            open() {
                setIsOpen(true);
            },
            close() {
                setIsOpen(false);
            }
        }));

        const handleClose = () => {
            setIsOpen(false);
        };

        return isOpen && createPortal(
            <dialog ref={dialog} open>
                {children}
                <form method="dialog">
                    <button onClick={handleClose}>{buttonCaption}</button>
                </form>
            </dialog>,
            document.getElementById("modal-root")
        );
    }
);

export default Modal;
