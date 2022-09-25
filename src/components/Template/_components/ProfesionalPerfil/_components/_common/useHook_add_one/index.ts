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
    const new_one = {
      ...tree.resume[category][0],
      id: make_id(),
    }

    const new_resume = JSON.stringify({
      ...resume,
      [category]: [...resume[category], new_one],
    })

    updateResume({
      content: new_resume,
    })
  }

  return {
    add_category,
  }
}
