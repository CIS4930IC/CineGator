export default async function auth() {
    const response = await fetch('/backend/authentication', {
        method: 'GET',
        credentials: 'include'
    })

    if (!response.ok) {
        return {
            success: false,
            username: null,
        }
    }

    const data = await response.json()
    
    return {
        success: data.loggedIn,
        username: data.username,
    }
}