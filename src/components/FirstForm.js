export const FirstForm = () => {
    let url = window.location.href
    let index  = url.match(/\/form\/(\d+)/)[1];
    return (
        index
    )
}