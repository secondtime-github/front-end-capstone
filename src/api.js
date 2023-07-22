/**
 * This function accepts a date as a parameter
 *  and returns an array of available reservation times for the provided date
 */
export const fetchAPI = (date) => {
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return ['20:00', '21:00', '22:00'];
    }
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

/**
 * This function accepts the booking form data as a parameter
 *  and will return true if the data was successfully submitted.
 */
export const submitAPI = (formData) => {
    return true;
};