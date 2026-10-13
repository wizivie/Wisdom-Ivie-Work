import type { ComponentType } from "react";
import BiDevelopersAreAlreadyAiEngineers from "./bi-developers-are-already-ai-engineers";
import StarSchemasStillWin from "./star-schemas-still-win";
import LettingAgentsQueryYourSemanticModel from "./letting-agents-query-your-semantic-model";
import DaxYourSuccessorCanRead from "./dax-your-successor-can-read";
import EvaluatingAiAgentsInRegulatedIndustries from "./evaluating-ai-agents-in-regulated-industries";
import ShipBiLikeSoftware from "./ship-bi-like-software";

export const postBodies: Record<string, ComponentType> = {
  "bi-developers-are-already-ai-engineers": BiDevelopersAreAlreadyAiEngineers,
  "star-schemas-still-win": StarSchemasStillWin,
  "letting-agents-query-your-semantic-model": LettingAgentsQueryYourSemanticModel,
  "dax-your-successor-can-read": DaxYourSuccessorCanRead,
  "evaluating-ai-agents-in-regulated-industries": EvaluatingAiAgentsInRegulatedIndustries,
  "ship-bi-like-software": ShipBiLikeSoftware,
};
