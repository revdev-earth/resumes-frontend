import { LayoutPages } from "@components/principal"
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@redux/api/endpoints/user"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch } from "@redux"

const templates = []

const ResumeDisable = () => (
  <div
    className="
    p-5 pt-4 w-[200px]
    h-[300px] bg-emerald-300 rounded-lg
    cursor-default
    "
  >
    Resumen actual
  </div>
)

const ResumeAvailable = () => (
  <Link href="/">
    <div className=" p- w-[200px] h-[300px] bg-emerald-300 cursor-pointer">
      Resumen actual
    </div>
  </Link>
)

import * as document_tree from "tree"
import { useNotToken } from "@hooks/useNotToken"

export const Lobby = () => {
  useNotToken()

  const dispatch = useDispatch()
  const { data: user, refetch } = useGetUserQuery({})
  const [updateUser, { isSuccess: successUpdateUser }] = useUpdateUserMutation()

  useEffect(() => {
    refetch()
  }, [refetch, successUpdateUser])

  useEffect(() => {
    if (user && !(Boolean(user?.business_card) && Boolean(user?.resume))) {
      updateUser({
        business_card: { create: document_tree.tree.business_card },
        resume: {
          create: {
            title: "resume",
            content: JSON.stringify(document_tree.tree.resume),
          },
        },
      })
    }

    // 1.) Obtener User
    // 2.) Si no tiene bussiness card y resumen entonces agregar default
  }, [dispatch, updateUser, user])

  return (
    <LayoutPages>
      <div className="p-12">
        <div className="font-bold text-3xl">Lobby</div>
        <div className="flex gap-[50px] mt-7">
          {templates.length > 0 ? <ResumeAvailable /> : <ResumeDisable />}
          <Link href="/templates">
            <div
              className="
                  p-5 pt-4 w-[300px] 
                  h-[300px] bg-emerald-300 cursor-pointer 
                  rounded-lg "
            >
              Templates
            </div>
          </Link>
        </div>
      </div>
    </LayoutPages>
  )
}
