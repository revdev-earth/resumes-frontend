import { useRouter } from "next/router"

import { useSelector } from "@redux"

import { Loader } from "@components/common/Loader"

import {
  useGetResumeWithJwtQuery,
  useGetResumeWithParameterQuery,
} from "@redux/api/endpoints"

import {
  useGetBussinessWithJwtQuery,
  useGetBussinessWithParameterQuery,
} from "@redux/api/endpoints/businnes_card"

import { useGetMeQuery } from "@redux/api/endpoints/me"

//  import Tempaltes
import { Template1 } from "@pages/Templates/template1"
import { Template2 } from "@pages/Templates/template2"

export const Resume = () => {
  const { isReady, query, push } = useRouter()
  const { user_name } = query
  const { token } = useSelector((s) => s.app.auth)

  if (!isReady) return <Loader />

  if (!user_name) {
    // "not user, push to home, \ninvite to participate with their signature"
    push("home")
    return <Loader />
  }

  // when have a user render Resume
  if (user_name) return <CheckMe {...{ user_name }} />

  if (token) return <GetResumeWithJwt />

  push("home")
  return <Loader />
}

const CheckMe = ({ user_name }) => {
  const { push } = useRouter()

  const get_me = useGetMeQuery({ user_name })
  const { data: me, isLoading } = get_me

  if (isLoading) return <Loader />

  if (!me) {
    // "Not me, go to home"
    push("home")
    return <Loader />
  }

  return <GetResumeWithUserParam {...{ me }} />
}

const GetResumeWithUserParam = ({ me }) => {
  const { data: business_card, isLoading: loading_business_card } =
    useGetBussinessWithParameterQuery({
      userId: me.userId,
    })
  const { data: resume, isLoading: loading_resume } =
    useGetResumeWithParameterQuery({
      userId: me.userId,
    })

  if (loading_business_card || loading_resume) return <Loader />

  return <RecreateResume {...{ business_card, resume }} />
}

const GetResumeWithJwt = () => {
  const { data: business_card, isLoading: loading_business_card } =
    useGetBussinessWithJwtQuery({})
  const { data: resume, isLoading: loading_resume } = useGetResumeWithJwtQuery(
    {}
  )

  if (loading_business_card || loading_resume) return <Loader />

  return <RecreateResume {...{ business_card, resume }} />
}

const RecreateResume = ({ business_card, resume }) => {
  const { push } = useRouter()

  // console.log(
  //   "\n\n RecreateResume: \n\n",

  //   "\n\n business_card: \n\n",
  //   business_card,
  //   "\n\n resume: \n\n",
  //   resume
  // )

  // return null

  const template_name = resume.template
  let template

  switch (template_name) {
    case "template1":
      template = (
        <Template1 {...{ business_card, resume: JSON.parse(resume.content) }} />
      )
      break
    case "template2":
      template = (
        <Template2 {...{ business_card, resume: JSON.parse(resume.content) }} />
      )
      break

    default:
      // "go to templates"
      push("templates")
      template = <Loader />
      break
  }

  return template
}
