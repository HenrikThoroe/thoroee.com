import Language from "./Language";
import CVEvent from "./CVEvent";

export const initialState: RootState = {
    language: "english",
    darkMode: false,
    events: [
        {
            id: 1,
            name: "Highschool",
            date: [new Date(2013, 7, 4), new Date()],
            resources: ["https://gymnasium-altenholz.de"],
            description: "My Highschool"
        },
        {
            id: 2,
            name: "Knowit",
            date: [new Date(2020, 1, 1), new Date(2020, 1, 14)],
            resources: ["https://knowit.no"],
            description: "Internship at Knowit"
        }
    ]
}

export default interface RootState {
    language: Language
    darkMode: boolean
    events: CVEvent[]
}