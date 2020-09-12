# CdaMultiplication

**This is currently incorrect.**
The source this is produced from ends up creating a somewhat different algebra than what is created with Cayley-Dickson construction.  I'm currently unable to determine how to correct it and the algebra it creates works for my desired purpose so for now it is in an incomplete state.


Algorithm for multiplying Cayley-Dickson algebras of arbitrary size.

Basic formula is from https://arxiv.org/abs/1602.02317v1 with thanks to https://math.stackexchange.com/questions/1178681/cayley-dickson-construction-a-general-rule-for-multiplying-imaginary-units.


Let f(p,q) = r represent e<sub>p</sub>e<sub>q</sub> = (r/|r|)e<sub>|r|-1</sub> where p, q &#8712; &#8469;.

The sign of r is the sign of e<sub>p</sub>e<sub>q</sub> and |r|-1 is the order of the unit *-ion.  r is calculate the same as in the linked document except to be 1 indexed so sign can be used and doesn't have to be returned as an seperate value.

General Algorithm

if(p = 0) then r = q+1

if(q = 0) then r = p+1

if(p = q > 0) then r = -1

if(p > q) then r = -f(q, p)

if(2<sup>N</sup> ≤ p < q < 2<sup>N+1</sup>) then r = (p &#8853; q) + 1

if(2<sup>N</sup> ≤ p < 2<sup>N+1</sup> ≤ q) then r = (-1)<sup>&#8970;q/2<sup>N</sup>&#8971;</sup>((p &#8853; q) + 1)