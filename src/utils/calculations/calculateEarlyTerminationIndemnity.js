function calculateEarlyTerminationIndemnity(salary, monthsRemaining) {
  if (salary <= 0 || monthsRemaining <= 0) return 0;

  return salary * monthsRemaining * 0.5;
}

export default calculateEarlyTerminationIndemnity;
