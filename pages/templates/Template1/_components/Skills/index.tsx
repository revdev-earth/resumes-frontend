import { ItemSkill } from "./styles";

import InputTxt from "@components/InputTxt";
import { Title } from "../../styles";
const Skills = ({ skills }) => {
  return (
    <div>
      <Title>Skills</Title>
      <ul>
        {skills.map(({ title, years }) => (
          <ItemSkill key={Math.random() * 10}>
            <InputTxt type="text" txt={title} />
            <InputTxt type="number" number txt={years} />
          </ItemSkill>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
