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
    <div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="font-medium text-gray-700 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 text-primary" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Human Verification
          </div>
          
          {hasAttempted && isCorrect && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Verified
            </span>
          )}
        </div>
        
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
          <div className="text-center text-lg font-semibold mb-3">
            <span className="rounded-lg bg-gray-100 px-3 py-1">
              {num1} + {num2} = ?
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-grow">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                  ${
                    hasAttempted 
                      ? isCorrect 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50' 
                      : 'border-gray-300'
                  }`}
                placeholder="Enter your answer"
                disabled={isCorrect}
              />
              {isCorrect && (
                <span className="absolute right-3 top-3 text-green-500">
                  ✓
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {!isCorrect && (
                <button
                  onClick={checkAnswer}
                  className="w-full sm:w-auto bg-primary hover:bg-black text-white font-medium px-4 py-3 rounded-lg transition-colors"
                  type="button"
                >
                  Verify
                </button>
              )}
              
              {hasAttempted && (
                <button
                  onClick={resetCaptcha}
                  className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-3 rounded-lg transition-colors"
                  type="button"
                >
                  {isCorrect ? 'Try Another' : 'Reset'}
                </button>
              )}
            </div>
          </div>
          
          {hasAttempted && (
            <div className={`mt-3 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'} flex items-center justify-center font-medium`}>
              {isCorrect 
                ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verification successful!
                  </>
                ) 
                : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Incorrect answer. Please try again.
                  </>
                )
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}