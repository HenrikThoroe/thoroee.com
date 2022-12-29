import Skillset from "../../components/pages/skills/Skillset/Skillset"
import VStack from "../../components/Stack/VStack"
import getSkills from "../../lib/api/load/getSkills"
import style from "./style.module.scss"

export default async function Page() {
  const skills = await getSkills()

  return (
    <section className={style.container}>
      <VStack spacing="8rem" className={style.stack}>
        {skills.map((skill) => (
          <Skillset
            label={skill.category}
            code={skill.code[0].code}
            language={skill.language}
            caption={skill.caption}
          />
        ))}
      </VStack>
    </section>
  )
}
