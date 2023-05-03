export default async function auth() {
    const response = await fetch('/backend/authentication.php', {
        method: 'GET',
        credentials: 'include'
    })

    if (!response.ok) {
        return {
            success: false,
            userID: null,
            username: null,
        }
    }

    const data = await response.json()
    
    return {
        success: data.loggedIn,
        userID: data.id,
        username: data.username,
    }
}