const palindromes = function(string) {
  const lower = string.toLowerCase();
  const clean = lower.replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");

  return clean === reversed;
};
// Do not edit below this line
module.exports = palindromes;
