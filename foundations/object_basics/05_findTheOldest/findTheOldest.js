function findTheOldest(people) {
  const currentYear = new Date().getFullYear();

  const getAge = function(person) {
    const endYear = person.yearOfDeath || currentYear;
    return endYear - person.yearOfBirth;
  };

  const oldest = people.reduce((oldestPerson, currentPerson) => {
    if (getAge(currentPerson) > getAge(oldestPerson)) {
      return currentPerson;
    }

    return oldestPerson;
  });

  return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
