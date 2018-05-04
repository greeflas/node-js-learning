exports.currentDate = () => {
    const date = new Date();

    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}
