import type { Question } from '../models/Question.js';
export const getRandomQuestion = async () => {
  try {
    const res = await fetch('/random');
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (err) {
    console.error('Error fetching question:', err);
    return null;
  }
};

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch('/api/questions/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};

