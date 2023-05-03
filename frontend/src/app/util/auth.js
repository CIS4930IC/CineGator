export default async function auth() {
    const response = await fetch(`/backend/authenticate`, {
        method: 'GET',
        credentials: 'include'
    })

    if (!response.ok) {
        return {
            success: false,
            username: null
        }
    }

    const data = await response.json()
    return {
        success: true,
        username: data.username
    }
}