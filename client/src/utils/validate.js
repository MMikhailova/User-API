
export const validateId = (id) =>
{   var userIdNumber = Number(id)
    if (!Number.isNaN(userIdNumber) && userIdNumber > 0) 
        return true
}

