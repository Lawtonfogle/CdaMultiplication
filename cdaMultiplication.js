const nion = (p,q) => {
    if(p === 0)
        return q + 1;
    if(q === 0)
        return p + 1;
    if(p === q)
        return -1;

    if(p > q)
        return -1 * nion(q, p);

    const pFloor = Math.floor(Math.log2(p));
    const qFloor = Math.floor(Math.log2(q));

    if(pFloor == qFloor)
        return (p ^ q) + 1;

    const signPower = Math.floor(q/pFloor);
    //Odd power is -1, even power is 1
    const sign = (signPower & 1) ? -1 : 1;

    return sign * ((p ^ q) + 1);
}

export default nion;