const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; // 3 to 16 characters, letters, numbers, and underscores


export const validateField =(fieldName, field)=>{

    if(fieldName  === "email"){
        return validateEmail(field);
    }

    if(fieldName === "phone"){
        return validatePhone(field);
    }

    if(fieldName === "password"){
        return validatePassword(field);
    }

    if(fieldName === "username"){
        return validateUsername(field);
    }

}

const validateEmail = (email) => {
    const isValid = emailRegex.test(email);
    return isValid ? null : 'Invalid email format';
}

const validatePhone = (phone) => {
    const isValid = phoneRegex.test(phone);
    return isValid ? null : 'Invalid phone number format';
}

const validatePassword = (password) => {
    const isValid = passwordRegex.test(password);
    return isValid ? null : 'Invalid password format';  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
}

const validateUsername = (username) => {
    const isValid = usernameRegex.test(username);
    console.log(isValid);
    console.log(username);
    return isValid ? null : 'Invalid username format';  // 3 to 16 characters, letters, numbers, and underscores
}


