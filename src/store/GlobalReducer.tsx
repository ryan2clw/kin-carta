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

export interface IGlobalReducer {
  contacts: IContact[];
}

const initialState = {
    contacts: []
}

export function GlobalReducer(state = initialState, action: { type: any; payload: boolean; }) {
  switch (action.type) {
    case actionTypes.CONTACT_DATA:
        console.log("MESSAGE RECEIVED!", action.payload);
        /* 
        We need data like this:
        const DATA = [
            {
                title: "Main dishes",
                data: ["Pizza", "Burger", "Risotto"]
            },
                        {
                title: "Main dishes",
                data: ["Pizza", "Burger", "Risotto"]
            },
        ]
        */
      return {
        ...state,
        contacts: action.payload
      }
    default:
      return state;
  }
}
