
export const getInterestRate = (interest = 0) => {
    return interest / 12 / 100;
}

export const getEMI = (amount = 0, interest = 0, year = 0) => {
    if( amount == 0 || interest == 0 || year == 0 ) {
        return 0;
    }
    let month = getMonths(year);
    let R = getInterestRate(interest);
    let a = amount * R * (Math.pow(1 + R, month));
    let b = Math.pow((1 + R), month) - 1;
    return Math.round(a / b);
}

export const getMonths = (year = 0) => {
    if( year == 0 ) {
        return 0;
    }
    return year * 12
}

export const getTotalPay = (year = 0, EMI = 0) => {
    if( EMI == 0 || year == 0 ) {
        return 0;
    }
    return getMonths(year) * EMI;
}

export const getInterestPay = (totalPay = 0, amount = 0) => {
    if( amount == 0 || totalPay == 0 ) {
        return 0;
    }
    return totalPay - amount;
}

export const getEventValue = (event) => {
    return parseFloat((event.target.value).toLocaleString())
}

export const getCurrency = (value = 0, currency = 'en-IN', args = []) => {
    if( value == 0 ) {
        return 0;
    }
    return value.toLocaleString(currency, args)
}