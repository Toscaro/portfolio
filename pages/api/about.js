export default async (request, response) => {
    const result = await fetch(`${process.env.API_BASE_PATH}/about.json`);
    const json = await result.json();

    response.status(200).json({
         about: json.about
    })
}