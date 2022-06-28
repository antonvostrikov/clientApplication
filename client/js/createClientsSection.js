import { addClientModal } from "./addClient.js"
import { createPreloader } from "./preloader.js"
import { svgAddUser } from "./svg.js"

export const createClientsSection = () => {
    const section = document.createElement('section')
    const h1 = document.createElement('h1')
    const container = document.createElement('div')
    const main = document.createElement('main')
    const sortingDisplay = document.createElement('thead')
    const theadTr = document.createElement('tr')
    const sortingDisplayId = document.createElement('th')
    const sortingDisplayName = document.createElement('th')
    const sortingDisplayCreate = document.createElement('th')
    const sortingDisplayEdit = document.createElement('th')
    const sortingDisplayContacts = document.createElement('th')
    const sortingDisplayActions = document.createElement('th')
    const sortingDisplaySpan = document.createElement('span')
    const addUserBtn = document.createElement('button')
    const addUserBtnSvg = document.createElement('span')
    const tableWrapper = document.createElement('div')
    const clientsTable = document.createElement('table')
    const tbody = document.createElement('tbody')
    const createSpan = document.createElement('span')
    const editSpan = document.createElement('span')

    const sortDisplayItems = [sortingDisplayId, sortingDisplayName, sortingDisplayCreate, sortingDisplayEdit]
    
    for (const item of sortDisplayItems) {
        item.addEventListener('click', () => {
            if (item.classList.contains('sort-down')) {
                item.classList.remove('sort-down')
                item.classList.add('sort-up')
            } else {
                item.classList.remove('sort-up')
                item.classList.add('sort-down')
            }
        })
    }

    sortingDisplayCreate.addEventListener('click', () => {
        if (sortingDisplayCreate.classList.contains('sort-down')) {
            createSpan.classList.add('sort-up')
        } else {
            createSpan.classList.remove('sort-up')
        }
    })

    sortingDisplayEdit.addEventListener('click', () => {
        if (sortingDisplayEdit.classList.contains('sort-down')) {
            editSpan.classList.add('sort-up')
        } else {
            editSpan.classList.remove('sort-up')
        }
    })

    sortingDisplayId.setAttribute('data-type', 'id')
    sortingDisplayName.setAttribute('data-type', 'text')
    sortingDisplayCreate.setAttribute('data-type', 'create')
    sortingDisplayEdit.setAttribute('data-type', 'update')

    section.classList.add('clients')

    tableWrapper.classList.add('clients__wrapper')

    h1.classList.add('clients__heading')
    h1.textContent = 'Клиенты'

    tbody.classList.add('clients__tbody')

    sortingDisplay.classList.add('clients__display', 'display-info')

    sortingDisplayId.classList.add('display-info__item', 'display-info__item--id', 'sort-up')
    sortingDisplayId.textContent = 'id'

    sortingDisplayName.classList.add('display-info__item', 'display-info__item--name', 'sort-down')
    sortingDisplayName.textContent = 'Фамилия Имя Отчество'

    sortingDisplayCreate.classList.add('display-info__item', 'display-info__item--create', 'sort-down')
    sortingDisplayCreate.textContent = 'Дата и время '

    sortingDisplayEdit.classList.add('display-info__item', 'display-info__item--change', 'sort-down')
    sortingDisplayEdit.textContent = 'Последние '

    sortingDisplayContacts.classList.add('display-info__item', 'display-info__item--contacts')
    sortingDisplayContacts.textContent = 'Контакты'

    sortingDisplayActions.classList.add('display-info__item', 'display-info__item--actions')
    sortingDisplayActions.textContent = 'Действия'

    sortingDisplaySpan.classList.add('display-info__sorting')
    sortingDisplaySpan.textContent = 'а-я'

    addUserBtn.classList.add('clients__btn', 'btn-reset')
    addUserBtn.textContent = 'Добавить клиента'
    
    addUserBtnSvg.classList.add('clients__svg')
    addUserBtnSvg.innerHTML = svgAddUser

    container.classList.add('container', 'clients__container')

    main.classList.add('main')

    clientsTable.classList.add('clients__table')

    createSpan.classList.add('create__span')

    editSpan.classList.add('change__span')

    /* append elements */

    main.append(section)

    section.append(container)

    sortingDisplayName.append(sortingDisplaySpan)

    sortingDisplayCreate.append(createSpan)

    sortingDisplayEdit.append(editSpan)

    theadTr.append(
        sortingDisplayId,
        sortingDisplayName,
        sortingDisplayCreate,
        sortingDisplayEdit,
        sortingDisplayContacts,
        sortingDisplayActions
    )

    sortingDisplay.append(theadTr)

    tableWrapper.append(clientsTable)

    clientsTable.append(sortingDisplay, tbody)

    tbody.append(createPreloader())

    addUserBtn.append(addUserBtnSvg)

    container.append(h1, tableWrapper, addUserBtn)

    addUserBtn.addEventListener('click', () => {
        document.body.append(addClientModal())
    })

    return {
        main, 
        clientsTable,
        tbody
    }
}