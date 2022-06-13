import { createClientsForm } from "./createModalForm.js"

export const addClientModal = () => {
    const createForm = createClientsForm()
    
    const modal = document.createElement('div')
    const modalContent = document.createElement('div')

    modal.classList.add('modal', 'site-modal', 'modal-active')

    modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active')
    modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form)

    createForm.form.classList.add('add-client')

    modal.append(modalContent)

    createForm.form.addEventListener('submit', (e) => {
        e.preventDefault()

        let contacts = [],
              clientObj = {}

        clientObj.name = createForm.inputName.value
        clientObj.surname = createForm.inputSurname.value
        clientObj.lastName = createForm.inputLastName.value
        clientObj.contacts = contacts

        console.log(clientObj)
    })

    createForm.modalClose.addEventListener('click', () => {
        modal.remove()
    })

    document.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.remove()
        }
    })

    return modal
}