import { deleteClientModal } from "./createDeleteModal.js"
import { editClientModal } from "./editClient.js"
import { createContactItemByType, formatDate, formatTime } from "./utils.js"

export const createClientItem = (data) => {
    const clientTr = document.createElement('tr')
    const clientId = document.createElement('span')
    const clientFullName = document.createElement('td')
    const clientName = document.createElement('span')
    const clientSurname = document.createElement('span')
    const clientLastName = document.createElement('span')
    const clientCreated = document.createElement('td')
    const createDate = document.createElement('span')
    const createTime = document.createElement('span')
    const clientChanged = document.createElement('td')
    const changedDate = document.createElement('span')
    const changedTime = document.createElement('span')
    const clientContacts = document.createElement('td')
    const clientsActions = document.createElement('td')
    const clientEdit = document.createElement('button')
    const clientDelete = document.createElement('button')
    const deleteClient = deleteClientModal()
    const editClient = editClientModal(data)

    for (const contact of data.contacts) {
        createContactItemByType(contact.type, contact.value, clientContacts)
    }

    const deleteById = () => {
        import('./clientsApi.js').then(({ deleteClientItem }) => {
            deleteClient.deleteModalDelete.addEventListener('click', () => {
                deleteClientItem(data.id)
                document.getElementById(data.id).remove()
            })
        })
    }

    clientDelete.addEventListener('click', () => {
        deleteById()
        document.body.append(deleteClient.deleteModal)
    })

    clientEdit.addEventListener('click', () => {
        document.body.append(editClient.editModal)
    })

    clientTr.classList.add('clients__item')
    clientTr.id = data.id

    clientId.classList.add('client__id')

    clientFullName.classList.add('clients__full-name')

    clientId.textContent = data.id.substr(0, 6)

    clientName.textContent = data.name
    clientName.classList.add('clients__name')

    clientSurname.textContent = data.surname
    clientSurname.classList.add('clients__surname')

    clientLastName.textContent = data.lastName
    clientLastName.classList.add('clients__lastname')

    clientCreated.classList.add('clients__created')

    createDate.classList.add('created__date')
    createDate.textContent = formatDate(data.createdAt)

    createTime.classList.add('created__time')
    createTime.textContent = formatTime(data.createdAt)

    clientChanged.classList.add('clients__changed')

    changedDate.classList.add('changed__date')
    changedDate.textContent = formatDate(data.updatedAt)

    changedTime.classList.add('changed__time')
    changedTime.textContent = formatTime(data.updatedAt)

    clientContacts.classList.add('clients__contacts')

    clientsActions.classList.add('clients__actions')

    clientEdit.textContent = 'Изменить'
    clientEdit.classList.add('clients__edit', 'btn-reset')

    clientDelete.textContent = 'Удалить'
    clientDelete.classList.add('clients__delete', 'btn-reset')

    clientFullName.append(clientSurname, clientName, clientLastName)
    clientCreated.append(createDate, createTime)
    clientChanged.append(changedDate, changedTime)
    clientsActions.append(clientEdit, clientDelete)
    clientTr.append(clientId, clientFullName, clientCreated, clientChanged, clientContacts, clientsActions)

    return clientTr
}