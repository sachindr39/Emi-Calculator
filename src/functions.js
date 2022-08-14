
export const getInterestRate = (interest) => {
    return interest / 12 / 100;
}

export const getEMI = (amount, interest, year) => {
    let month = getMonths( year );
    let R = getInterestRate( interest );
    let a = amount * R * (Math.pow(1 + R, month));
    let b = Math.pow((1 + R), month) - 1;
    return Math.round(a / b);
}

export const getMonths = (year) => {
    return year * 12
}

export const getTotalPay = (year, EMI) => {
    return getMonths( year ) * EMI;
}

export const getInterestPay = (totalPay, amount) => {
    return totalPay - amount;
}

export const getEventValue = ( event ) => {
    return parseFloat( ( event.target.value ).toLocaleString() )
}

export const getCurrency = ( value, currency = 'en-IN', args = [] ) => {
    return value.toLocaleString( currency, args )
}