//function payeValue to calculate PAYE given by the tax rates.
function calculatePayee(monthsSalary) {
    const nssfDeductions = calculateNssfDeductions(monthsSalary);
    const nhifDeductions = calculateNhifDeductions(monthsSalary);
    taxablePay = monthsSalary - nssfDeductions;
    const taxBracket1 = 24000;
    const taxBracket2 = 32333;
    const taxRate1 = 0.1;
    const taxRate2 = 0.25;
    const taxRate3 = 0.3;
    const personalRelief = 2400;
    nhifDeductionsTax = nhifDeductions * 0.15;
  
    let payee = 0;
  
    if (taxablePay <= taxBracket1) {
      payee = taxablePay  * taxRate1; // 10% tax rate
    } else if (taxablePay  <= taxBracket2) {
      payee = ((taxablePay  - taxBracket1) * taxRate2) + (taxBracket1 * taxRate1); // 25% tax rate
    } else {
      payee = ((taxablePay  - taxBracket2) * taxRate3) + ((taxBracket2 - taxBracket1) * taxRate2) + (taxBracket1 * taxRate1); // 30% tax rate
    }
  
    return payee - (nhifDeductionsTax + personalRelief);
  }
  
  
  // Function to enumarate NHIF Deductions based on the given NHIF rates
    function calculateNhifDeductions(monthsSalary) {
    if (monthsSalary <= 5999) {
      return 150;
    } else if (monthsSalary <= 7999) {
      return 300;
    } else if (monthsSalary <= 11999) {
      return 400;
    } else if (monthsSalary <= 14999) {
      return 500;
    } else if (monthsSalary <= 19999) {
      return 600;
    } else if (monthsSalary <= 24999) {
      return 750;
    } else if (monthsSalary <= 29999) {
      return 850;
    } else if (monthsSalary <= 34999) {
      return 900;
    } else if (monthsSalary <= 39999) {
      return 950;
    } else if (monthsSalary <= 44999) {
      return 1000;
    } else if (monthsSalary <= 49999) {
      return 1100;
    } else if (monthsSalary <= 59999) {
      return 1200;
    } else if (monthsSalary <= 69999) {
      return 1300;
    } else if (monthsSalary <= 79999) {
      return 1400;
    } else if (monthsSalary <= 89999) {
      return 1500;
    } else if (monthsSalary <= 99999) {
      return 1600;
    } else {
      return 1700;
    }
  }
  
  // Function to calculate NSSF Deductions based on the provided NSSF rates
    function calculateNssfDeductions(monthsSalary) {
    if (monthsSalary <= 6000) {
      nssfDeductions = monthsSalary * 0.06;
    } else{
      nssfDeductions =(18000 - 6000) * 0.06 + (6000 * 0.06);
    }
    return nssfDeductions;
  }
  
  // Function to calculate the gross salary by adding the basic salary and benefits
  function calculateGrossSalary(basicSalary, benefits) {
      return basicSalary + benefits;
  }
  
  // Function to enumarate the net salary by subtracting the deductions from the gross salary
  function calculateNetSalary(basicSalary, benefits) {
      const  monthsSalary = calculateGrossSalary(basicSalary, benefits)
      const payee = calculatePayee(monthsSalary);
      const nhifDeductions = calculateNhifDeductions(monthsSalary);
      const nssfDeductions = calculateNssfDeductions(monthsSalary);
      const netSalary = monthsSalary - (payee + nhifDeductions + nssfDeductions);
      return {
        monthsSalary: monthsSalary,
        netSalary: netSalary,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        payee: payee
      };
  }
  
  console.log(calculateNetSalary(52500, 0));