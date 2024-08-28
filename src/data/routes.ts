import { COMMON_QUESTIONS, CONTACT, HOME, TESTS_LIST } from "../routes";

export type Routes = {
  label: string,
  path: string
}

export const routes: Routes[] = [
    {
      label: "Home",
      path: HOME,
    },
    {
      label: "Tests",
      path: TESTS_LIST,
    },
    {
      label: "Common Questions",
      path: COMMON_QUESTIONS,
    },
    {
      label: "Contact",
      path: CONTACT,
    },
]