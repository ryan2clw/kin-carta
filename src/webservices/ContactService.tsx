enum apiUrls {
    CONTACT = "https://s3.amazonaws.com/technical-challenge/v3/contacts.json"
}

interface IResponse {
    ok: any; 
    text: () => any;
    json: () => any;
}

function handleResponse(response: IResponse) {
    if(!response.ok){
        // MARK TO DO: ALERT USER OF FAILED NETWORK CALL
        return Promise.reject(response.text())
    }
    return response.json().then((data: any)=>{
        return data;
    });
}
function getContacts() {
    return fetch(apiUrls.CONTACT)
        .then(handleResponse)
        .then(data => {
            console.log("data", data);
            return data;
        }, error => {
            console.log("error", error);
            return error;
        });
}
export default getContacts;