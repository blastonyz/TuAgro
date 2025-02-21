import bcrypt,{genSaltSync} from 'bcrypt'

export const createHash = (password) => {
    const result = bcrypt.hashSync(password, genSaltSync(16));
    return result;
};

export const isValidPassword = (password,user) => {
    const result = bcrypt.compareSync(password, user.password);
    return result;
};
