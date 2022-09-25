import { tree } from "tree"
import { usePutResumeMutation } from "@redux/api/endpoints"
import { useGetResumeWithJwtQuery } from "@redux/api/endpoints"

export const get_random_int = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const make_id = () =>
  Number(`${get_random_int(1, 9)}${new Date().getTime()}`)

export const useHook_add_one = (category: string) => {
  const { data: resume_table } = useGetResumeWithJwtQuery({})

  const resume = JSON.parse(resume_table.content)

  const [updateResume] = usePutResumeMutation()

  const add_category = () => {
    updateResume({
      content: JSON.stringify({
        ...resume,
        [category]: [
          ...resume[category],
          {
            ...tree.resume[category][0],
            id: make_id(),
          },
        ],
      }),
    })
  }

  return {
    add_category,
  }
}
