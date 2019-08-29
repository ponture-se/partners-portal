export default function separateNumberByChar(value, char = " ") {
  return value === 0
    ? 0
    : !value
    ? ""
    : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${char}`);
}
