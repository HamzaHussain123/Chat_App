export const getUserForSidebar = async (req, res, next) => {

    try {
        const loggedInUserId = req.user.id

    } catch (error) {
        next(error)

    }
}