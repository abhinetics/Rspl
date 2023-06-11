import React, { useState } from 'react';
import './SavingCalc.css';
import { motion } from 'framer-motion';

function SavingsCalculator() {
  const [income, setIncome] = useState();
  const [expenses, setExpenses] = useState();
  const [savingsPercentage, setSavingsPercentage] = useState();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'income') {
      setIncome(value);
    } else if (name === 'expenses') {
      setExpenses(value);
    } else if (name === 'savingsPercentage') {
      setSavingsPercentage(value);
    }
  };

  const calculateSavings = () => {
    if (!income || !expenses || !savingsPercentage) {
      return 0;
    }
    const savingsInUSD = (income - expenses) * (savingsPercentage / 100);
  const savingsInRupees = Math.round(savingsInUSD * 82 * 100) / 100;
  return savingsInRupees;
  };

  return (
    // <div className="savings-calculator">
    //   {/* <label htmlFor="income">Income:</label> */}
    //   <input type="number" placeholder='Income' id="income" name="income" value={income} onChange={handleInputChange} />

    //   {/* <label htmlFor="expenses">Expenses:</label> */}
    //   <input type="number" placeholder='Expenses' id="expenses" name="expenses" value={expenses} onChange={handleInputChange} />

    //   {/* <label htmlFor="savingsPercentage">Savings Percentage:</label> */}
    //   <input type="number" placeholder='Saving Percentage' id="savingsPercentage" name="savingsPercentage" value={savingsPercentage} onChange={handleInputChange} />

    //   <p>Your monthly savings: Rs {calculateSavings()}</p>
    // </div>
    <div className="savings-calculator">
      <motion.input
        type="number"
        placeholder="Income"
        id="income"
        name="income"
        value={income}
        onChange={handleInputChange}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      />

      <motion.input
        type="number"
        placeholder="Expenses"
        id="expenses"
        name="expenses"
        value={expenses}
        onChange={handleInputChange}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      />

      <motion.input

        type="number" 
        placeholder="Saving Percentage"
        id="savingsPercentage"
        name="savingsPercentage"
        value={savingsPercentage}
        onChange={handleInputChange}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      />

      <motion.p

        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        Your monthly savings: Rs {calculateSavings()}
      </motion.p>
    </div>
    
  );
}

export default SavingsCalculator;
