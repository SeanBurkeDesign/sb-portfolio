const contentful = require('contentful')
const SPACE_ID = '18s5rfesmx62'
const API_KEY = 'Sp02Dzr6pP-Z7iLf2h1izfkUmu5wv2PV0MhfEgwFPrM'

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: API_KEY
})

const fetchEntries = () => {
  client.getEntries()
    .then((response) => console.log(`do something with this ${response}`))
    .catch((error) => console.error(error))
}

const fetchEntryById = (entryId) => {
  client.getEntry(entryId)
    .then((response) => console.log(`do something with this ${response}`))
    .catch((error) => console.error(error))
}

export const API = {
  contentful,
  client,
  fetchEntries,
  fetchEntryById
}