"use client"

import useBreakpoint from "../../../../lib/hooks/useBreakpoint"
import HStack from "../../../Stack/HStack"
import VStack from "../../../Stack/VStack"
import CVCard from "../CVCard/CVCard"
import SkillsCard from "../SkillsCard/SkillsCard"
import JourneyCard from "../JourneyCard/JourneyCard"
import ProjectCard from "../ProjectCard/ProjectCard"

/**
 * A set of cards that should be displayed on the
 * home page. Acts as an overview of the site's main content.
 */
export default function OverviewCardSet() {
  const breakpoint = useBreakpoint()
  const spacing = 30

  if (breakpoint === "desktop") {
    return (
      <HStack spacing={spacing}>
        <JourneyCard />
        <VStack spacing={spacing}>
          <HStack spacing={spacing}>
            <CVCard />
            <ProjectCard />
          </HStack>
          <SkillsCard />
        </VStack>
      </HStack>
    )
  }

  if (breakpoint === "laptop" || breakpoint === "tablet") {
    return (
      <VStack spacing={spacing}>
        <HStack spacing={spacing}>
          <JourneyCard />
          <VStack spacing={spacing}>
            <CVCard />
            <ProjectCard />
          </VStack>
        </HStack>
        <SkillsCard />
      </VStack>
    )
  }

  return (
    <VStack spacing={spacing}>
      <JourneyCard />
      <CVCard />
      <ProjectCard />
      <SkillsCard />
    </VStack>
  )
}
