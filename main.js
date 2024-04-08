const add = (a, b) => a + b;

const convertToLetterGrade = grade => {
  if (grade > 90) return A;
  if (grade > 80) return B;
  if (grade > 70) return C;
  return F;
};

const validatePosNum = number => num >= 0;
