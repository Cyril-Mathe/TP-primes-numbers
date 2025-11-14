export default function NumberSchema(number) {
    if (number % 2 === 1) {
        return number + "prime number";
    } else {
        return "not a prime number";
    };
}