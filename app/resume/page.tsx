import About from "../../components/pages/resume/About/About"
import References from "../../components/pages/resume/References/References"
import HStack from "../../components/Stack/HStack"
import VStack from "../../components/Stack/VStack"
import getAuthor from "../../lib/api/load/getAuthor"
import getEducationReferences from "../../lib/api/load/getEducationReferences"
import getExperienceReferences from "../../lib/api/load/getExperienceReferences"
import getRewardReferences from "../../lib/api/load/getRewardReferences"
import style from "./style.module.scss"

export default async function Page() {
  const authorPromise = getAuthor()
  const educationPromise = getEducationReferences()
  const experiencePromise = getExperienceReferences()
  const rewardPromise = getRewardReferences()

  const [author, education, experience, reward] = await Promise.all([
    authorPromise,
    educationPromise,
    experiencePromise,
    rewardPromise,
  ])

  return (
    <HStack padding={[50, 0]}>
      <VStack className={style.content} spacing={80}>
        <About user={author} />
        <References
          education={education}
          experiences={experience}
          rewards={reward}
        />
      </VStack>
    </HStack>
  )
}
