import { VOICE_NAME } from "@/constants/google";
import { ROLE, ENDING_CONDITION } from "@/constants/prompt";
import { Language } from "@/types/openai";

const generatePrompt = (type: string) => {
  let bot_role = "";
  // 역할 부여
  bot_role += Object.values(ROLE[type]).join(" ");

  // 대화 종료 조건
  bot_role += ENDING_CONDITION;

  console.log(bot_role);

  return bot_role;
};

const generateFunctions = (suggested: boolean) => {
  const suggestedParameters = {
    type: "object",
    properties: {
      suggested: {
        type: "object",
        properties: {
          suggested_a: {
            type: "string",
            description: "suggested answer A",
          },
          suggested_b: {
            type: "string",
            description: "suggested answer B",
          },
          suggested_c: {
            type: "string",
            description: "suggested answer C",
          },
          suggested_d: {
            type: "string",
            description: "suggested answer D",
          },
        },
        required: ["suggested_a", "suggested_b", "suggested_c", "suggested_d"],
      },
      answer: {
        type: "string",
        description: "Give the right answer to the question the user asked you",
      },
    },
    required: ["suggested", "answer"],
  };

  const basicParameters = {
    type: "object",
    properties: {
      answer: {
        type: "string",
        description: "Give the right answer to the question the user asked you",
      },
    },
    required: ["answer"],
  };

  const functions = [
    {
      name: "role_play",
      description: "",
      parameters: suggested ? suggestedParameters : basicParameters,
    },
  ];

  return functions;
};

const getVoiceName = (languageCode: Language) => {
  const voiceData = VOICE_NAME[languageCode];
  if (!voiceData) {
    return "해당 언어 코드에 대한 데이터가 없습니다.";
  }

  const voiceNames = [];
  for (const voice in voiceData) {
    voiceNames.push(voiceData[voice].voice_name);
  }

  const randomIndex = Math.floor(Math.random() * voiceNames.length);
  return voiceNames[randomIndex];
};

export { generatePrompt, generateFunctions, getVoiceName };
