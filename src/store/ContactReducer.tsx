import { actionTypes } from './ActionTypes';

interface IContact {
    name: string,
    id: string,
    companyName: string,
    isFavorite: boolean,
    smallImageURL: string,
    largeImageURL: string,
    emailAddress: string,
    birthdate: string,
    phone: {
        work: string,
        home: string
        mobile: string
    },
    address: {
        street: string,
        city: string,
        state: string,
        country: string,
        zipCode: string
    }
}

export interface IContactReducer {
  contacts: IContact[];
}

const initialState = {
    contacts: []
}

export function ContactReducer(state = initialState, action: { type: any; payload: any; }) {
  switch (action.type) {
    case actionTypes.CONTACT_DATA:
        const contactData = [
            {
                title: "FAVORITE CONTACTS",
                data : action.payload.filter((element: IContact) => element.isFavorite)
            },
            {
                title: "OTHER CONTACTS",
                data : action.payload.filter((element: IContact) => !(element.isFavorite))
            }
        ]
      return {
        ...state,
        contacts: contactData
      }
    default:
      return state;
  }
}
