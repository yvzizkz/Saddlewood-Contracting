"use client";

import React, { useEffect, useState } from 'react';

interface SimpleCaptchaProps {
  onVerify: (verified: boolean) => void;
}

/**
 * A simple captcha component that displays a basic math problem
 * Used as a fallback when more complex captcha solutions are having integration issues
 */
export default function SimpleCaptcha({ onVerify }: SimpleCaptchaProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);

  useEffect(() => {
    // Generate random numbers between 1 and 10
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const checkAnswer = () => {
    setHasAttempted(true);
    const correctAnswer = num1 + num2;
    const isAnswerCorrect = parseInt(userAnswer, 10) === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    onVerify(isAnswerCorrect);
  };

  const resetCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsCorrect(false);
    setHasAttempted(false);
    onVerify(false);
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex flex-col space-y-3">
        <div className="text-center font-medium">
          Human Verification
        </div>
        
        <div className="text-center">
          What is {num1} + {num2}?
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className={`border rounded px-3 py-2 w-full ${
              hasAttempted 
                ? isCorrect 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-red-500 bg-red-50' 
                : 'border-gray-300'
            }`}
            placeholder="Enter your answer"
            disabled={isCorrect}
          />
          
          {!isCorrect && (
            <button
              onClick={checkAnswer}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              type="button"
            >
              Verify
            </button>
          )}
          
          {hasAttempted && (
            <button
              onClick={resetCaptcha}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-2 rounded"
              type="button"
            >
              Reset
            </button>
          )}
        </div>
        
        {hasAttempted && (
          <div className={`text-sm text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect 
              ? '✓ Verification successful!' 
              : '✗ Incorrect answer. Please try again.'}
          </div>
        )}
      </div>
    </div>
  );
}