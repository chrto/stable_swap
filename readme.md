Stable swap liquidity pool for two tokens. A stable swap pool has the
characteristic function

$$
An^n \sum_{i=1}^{n} x_i + D = ADn^n + \frac{D^{(n+1)}}{n^n\prod_{i=1}^{n} x_i} , \quad A, D, x_i \geq 0
$$

Calculate the amount of value the user would receive for exchanging x number of tokens. The
algorithm is as follows:
1. The pool deducts 0.35% fee from the incoming x tokens.
2. Then, the pool exchanges the remaining tokens for the other one.
3. The user receives y number of tokens.


See more: https://github.com/curvefi/curve-contract

The input file is a csv, containing the (A, Pool x and Pool y) values, these describe the current state of the
pool. The “Exchange x” value describes an exchange operation, where a number of X tokens are sent to
the pool to be exchanged to Y tokens. The output should contain the number of Y tokens the user should
receive.

Example input:
A = 82;
Pool x = 671.1;
Pool y = 102.97;
Exchange x = 800.16;

Example output = 102.63
