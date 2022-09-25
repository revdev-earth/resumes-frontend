import { usePutResumeMutation } from "@redux/api/endpoints"
import { useGetResumeWithJwtQuery } from "@redux/api/endpoints"

export const useHook_remove_one = (category: string) => {
  const { data: resume_table } = useGetResumeWithJwtQuery({})

  const resume = JSON.parse(resume_table.content)

  const [updateResume] = usePutResumeMutation()

  const remove_item = (id: number) => {
    updateResume({
      content: JSON.stringify({
        ...resume,
        [category]: [
          ...resume[category].filter((item) => {
            console.log(`${id} === ${item.id}`)
            if (id === item.id) return false
            return true
          }),
        ],
      }),
    })
  }

  return {
    remove_item,
  }
}
