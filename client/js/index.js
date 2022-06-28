import { createClientsHeader } from "./createHeader.js"
import { createClientsSection } from "./createClientsSection.js"
import { getClients } from "./clientsAPI.js"
import { createClientItem } from "./createClientItem.js"
import { sortTable } from "./sortClientTable.js"
import { searchClients } from "./searchClient.js"


const createApp = async () => {
    const clients = await getClients()
    const header = createClientsHeader()
    const clientSection = createClientsSection()
    document.body.append(header, clientSection.main)
    
    const preloader = document.querySelector('.preloader')

    preloader.remove()
    
    for (const client of clients) {
        document.querySelector('.clients__tbody').append(createClientItem(client))
    }
    sortTable()    
    searchClients(clients)
}

createApp()
