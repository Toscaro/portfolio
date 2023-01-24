const ABOUT_ENDPOINT_PATH = "/about.json"

interface About {
    name: String,
    nickName: String,
    email: String,
    secondaryEmail: String,
    age: String,
    phoneNumber: String,
    secondaryPhoneNumber: String,
}

export const getAbout = async () => {
    return fetch(`${process.env.API_BASE_PATH}${ABOUT_ENDPOINT_PATH}`)
    .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<About>
      });
}