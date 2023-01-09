import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <div>
      <Flex direction={"column"} alignItems="center" mb="20">
        <Heading color={"white"} mb="10">
          My Statistics
        </Heading>
        <Flex
          alignItems="center"
          gap="20px"
          flexDirection={["column", "column", "row"]}
        >
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=hr927&show_icons=true&locale=en&layout=compact"
            alt="hr927"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=hr927&show_icons=true&locale=en"
            alt="hr927"
          />
        </Flex>
      </Flex>
      <Flex direction={"column"} alignItems="center">
        <Heading color={"white"} mb="10">
          My Github Calendar
        </Heading>
        <GitHubCalendar username="hr927" style={{ color: "white" }} />
      </Flex>
    </div>
  );
};

export default GithubStats;

//
