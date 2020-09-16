interface Restuarant {
    name: string
    cuisine: string
}

const API_BASE_URL = "https://developers.zomato.com/api/v2.1/"

export const getCat = async () => {
    const response = await fetch(API_BASE_URL + "categories", {
        headers: {
            'Accept': "application/json",
            'user-key': "8e5ebc7c30c490667fc19c7105337be5",
        },
    })
    .then((res) => res.json())
    .then(res => JSON.parse(res));
    console.log(response);
    return response;

}