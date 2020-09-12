export default (p,q) => {
    if(p == 0)
        return q + 1;
    if(q == 0)
        return p + 1;
    if(p == q)
        return -1;

    const inverter = p < q ? 1 : -1;
    const pFloor = Math.floor(Math.log2(p));
    const qFloor = Math.floor(Math.log2(q));

    if(pFloor == qFloor)
        return inverter * ((p ^ q) + 1);

    const signPower = Math.floor(q/pFloor);
    //Odd power is -1, even power is 1, but we may have to invert this.
    const sign = ((sign & 1) ? -1 : 1) * inverter;

    return sign * ((p ^ q) + 1);
}
