//on lance une fonction asynchrone pour réaliser un fetch
//on défini l'url à l'aide du swagger ainsi que la method
async function loginUser(user) {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );
            //si pas de réponse, on affiche une erreur
        if (!response.ok) {
            throw new Error(`Failed fetching data (HTTP ${response.status})`);
        }

        const data = await response.json();

        return data.body.token;
    } catch (error) {
        console.log(error.message);
        const errorMessage =
            error.message === "Failed to fetch data (HTTP 400)"
                ? "Invalid credentials"
                : "An error occurred during login";
        throw new Error(errorMessage); 
    }
}
export default loginUser;