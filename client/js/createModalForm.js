import { createContactItem } from "./createContact.js"
import { svgContactDefault, svgContactHover } from "./svg.js"

export const createClientsForm = () => {
    const modalTitle = document.createElement('h2')
    const modalClose = document.createElement('button')
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const labelName = document.createElement('label')
    const inputSurname = document.createElement('input')
    const labelSurname = document.createElement('label')
    const inputLastName = document.createElement('input')
    const labelLastName = document.createElement('label')
    const requireName = document.createElement('span')
    const requireSurname = document.createElement('span')
    const addContactBtn = document.createElement('button')
    const contactBtnSvgDefault = document.createElement('span')
    const contactBtnSvgHover = document.createElement('span')
    const saveBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')
    const contactsBlock = document.createElement('div')
    const formFloatingName = document.createElement('div')
    const formFloatingSurname = document.createElement('div')
    const formFloatingLastName = document.createElement('div')

    modalTitle.classList.add('modal__title')
    modalTitle.textContent = 'Новый клиент'

    modalClose.classList.add('modal__close', 'btn-reset')

    form.classList.add('modal__form')

    formFloatingName.classList.add('form-floating')

    formFloatingSurname.classList.add('form-floating')

    formFloatingLastName.classList.add('form-floating')

    /* attributes */

    inputName.classList.add('modal__input')
    inputName.id = 'floatingName'
    inputName.type = 'text'
    inputName.placeholder = 'Имя'

    inputSurname.classList.add('modal__input')
    inputSurname.id = 'floatingSurname'
    inputSurname.type = 'text'
    inputSurname.placeholder = 'Фамилия'

    inputLastName.classList.add('modal__input')
    inputLastName.id = 'floatingLastName'
    inputLastName.type = 'text'
    inputLastName.placeholder = 'Отчество'

    labelName.classList.add('modal__label')
    labelName.for = 'floatingName'
    labelName.textContent = 'Имя'

    labelSurname.classList.add('modal__label')
    labelSurname.for = 'floatingSurname'
    labelSurname.textContent = 'Фамилия'

    labelLastName.classList.add('modal__label')
    labelLastName.for = 'floatingLastName'
    labelLastName.textContent = 'Отчество'

    requireName.classList.add('modal__label')
    requireName.textContent = '*'

    requireSurname.classList.add('modal__label')
    requireSurname.textContent = '*'

    addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active')
    addContactBtn.textContent = 'Добавить контакт'

    saveBtn.classList.add('modal__btn-save', 'btn-reset', 'site-btn')
    saveBtn.textContent = 'Сохранить'

    cancelBtn.classList.add('modal__btn-back', 'btn-reset')
    cancelBtn.textContent = 'Отмена'

    contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg-active')
    contactBtnSvgDefault.innerHTML = svgContactDefault

    contactBtnSvgHover.classList.add('btn-contact__svg', 'btn-contact__svg--hover')
    contactBtnSvgHover.innerHTML = svgContactHover

    contactsBlock.classList.add('modal__contact')

    /* append elements */

    labelName.append(requireName)

    labelSurname.append(requireSurname)

    formFloatingName.append(inputName, labelName)

    formFloatingSurname.append(inputSurname, labelSurname)

    formFloatingLastName.append(inputLastName, labelLastName)

    contactsBlock.append(addContactBtn)

    addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover)

    addContactBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const contactsItems = document.getElementsByClassName('contact')
        console.log(contactsItems.length)
        if (contactsItems.length < 9) {
            const contactItem = createContactItem()

            contactsBlock.style.backgroundColor = 'var(--color-athens-gray)'
            contactsBlock.prepend(contactItem.contact)
        } else {
            const contactItem = createContactItem()
            contactsBlock.prepend(contactItem.contact)
            addContactBtn.classList.remove('modal__btn-contact--active')
        }
    })

    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        contactsBlock,
        saveBtn,
        cancelBtn
    )
    
    return {
        form, 
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn
    }
}