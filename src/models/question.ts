export type Question = {
    id: number,
    description: string,
    correctAnswer: string,
    answers: Array<string>,
    image?: string
}

export type CommonQuestion = {
    id: number,
    description: string,
    answer: Array<string>
}
