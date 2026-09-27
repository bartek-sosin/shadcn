import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireTitle,
} from "sosek-system"

export const Onboarding = () => (
  <Questionnaire className="w-full max-w-md" shortcuts="letters">
    <QuestionnaireProgress />
    <QuestionnaireItem name="role" required>
      <QuestionnaireTitle>What best describes your role?</QuestionnaireTitle>
      <QuestionnaireDescription>We’ll tailor templates to how you work.</QuestionnaireDescription>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="design" defaultChecked>
          Designer
          <QuestionnaireChoiceDescription>UI, UX and visual design</QuestionnaireChoiceDescription>
        </QuestionnaireChoice>
        <QuestionnaireChoice value="eng">
          Engineer
          <QuestionnaireChoiceDescription>Frontend or full-stack</QuestionnaireChoiceDescription>
        </QuestionnaireChoice>
        <QuestionnaireChoice value="pm">
          Product manager
          <QuestionnaireChoiceDescription>Roadmaps and specs</QuestionnaireChoiceDescription>
        </QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireItem name="team" multiple>
      <QuestionnaireTitle>Which teams will use Sosek?</QuestionnaireTitle>
      <QuestionnaireChoices>
        <QuestionnaireChoice value="product">Product</QuestionnaireChoice>
        <QuestionnaireChoice value="marketing">Marketing</QuestionnaireChoice>
      </QuestionnaireChoices>
    </QuestionnaireItem>
    <QuestionnaireActions>
      <QuestionnairePrevious />
      <QuestionnaireSkip />
      <QuestionnaireNext />
    </QuestionnaireActions>
  </Questionnaire>
)
