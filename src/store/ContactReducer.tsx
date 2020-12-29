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
        const favContacts = action.payload.filter((element: IContact) => element.isFavorite);
        favContacts.sort(function(a: IContact, b: IContact){return b.name < a.name});
        const otherContacts = action.payload.filter((element: IContact) => !(element.isFavorite));
        otherContacts.sort(function(a: IContact, b: IContact){return b.name < a.name});
        const contactData = [
            {
                title: "FAVORITE CONTACTS",
                data : favContacts
            },
            {
                title: "OTHER CONTACTS",
                data : otherContacts
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
