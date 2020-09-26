export type Dificulties = "EASY" | "MEDIUM" | "HARD";

export const difficultyMap = {
  EASY: 5,
  MEDIUM: 10,
  HARD: 15,
};

export type Output = {
  name: string;
  difficultyStr: Dificulties;
  difficulty: number;
  questionFileName: string;
  answerFileName: string;
};
