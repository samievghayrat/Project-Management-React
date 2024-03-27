import Input from "./Input.jsx";
import React, {useRef} from "react";
import Modal from "./Modal.jsx";
export default function NewProject({onAdd}) {
    const modal = useRef();

    const titleRef = useRef();
    const descRef = useRef();
    const dueDate = useRef();


    function handleSave() {

        const enteredTitle = titleRef.current.value;
        const enteredDesc = descRef.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
            //show an error
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueDate,
        })

    }

    return <>
        <Modal ref={modal} buttonCaption='Okay'>
            <h2>Invalid Input</h2>
            <p>Oops ...looks like you forgot to enter a value</p>
            <p>Make sure to enter all the values</p>
        </Modal>

        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:bg-stone-950">Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={titleRef} label='Title'></Input>
                <Input ref={descRef} label='Description' textarea></Input>
                <Input ref={dueDate} label='Due Date' type="date"></Input>
            </div>
        </div>
    </>
}