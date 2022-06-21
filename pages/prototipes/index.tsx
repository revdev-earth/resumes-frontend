import { useRef, useState } from "react"
import LayoutPages from "@components/LayoutPages"
import { Content } from "./styles"
import InputTxt from "@components/InputTxt"

const Prototipes = () => {
  return (
    <LayoutPages>
      <h2>Prototype</h2>
      <Content>
        <InputTxt />
      </Content>
    </LayoutPages>
  )
}

export default Prototipes
