import bcrypt from 'bcrypt'

export const createHash = async (password) => {
    const salt = await bcrypt.genSalt(8)
    return await bcrypt.hash(password, salt)
};

export const isValidPassword = async (password,user) => {
    return await bcrypt.compare(password, user.password);
};
