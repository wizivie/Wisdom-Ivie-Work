export default function Post() {
  return (
    <>
      <p className="lead">
        In June 2026 I started a secondment as an AI Engineer while keeping my BI Developer role.
        I expected a steep jump into unfamiliar territory. What I found instead was that much of
        what makes AI work in a business is the work BI developers already do every day.
      </p>

      <h2>Agents need a semantic layer</h2>
      <p>
        An AI agent asked “how did claims frequency change last quarter for younger drivers?” has
        to know what <em>claims frequency</em> means, which table holds it, what counts as a{" "}
        <em>younger driver</em>, and which quarter is “last”. That is exactly what a good semantic
        model encodes: business-friendly names, agreed measure definitions, relationships and
        hierarchies.
      </p>
      <p>
        Without that layer, a language model will improvise — and improvised definitions are how you
        end up with a confident, plausible and wrong number. With it, the agent can call a
        well-defined measure instead of inventing one.
      </p>
      <blockquote>
        Large language models are good at language. The semantic layer is where the business’s
        language is written down.
      </blockquote>

      <h2>Skills that transfer directly</h2>
      <h3>Data modelling</h3>
      <p>
        Grain, keys, conformed dimensions — retrieval and tool design for agents rely on the same
        thinking. A well-structured model is easier for an agent to query and easier to ground
        answers in.
      </p>
      <h3>Metric definitions and documentation</h3>
      <p>
        Measure descriptions, synonyms and display folders were once “nice to have”. For AI, they
        are part of the prompt. The quality of these descriptions measurably changes how well
        assistants like Copilot pick the right field.
      </p>
      <h3>Data quality and reconciliation</h3>
      <p>
        BI developers are used to proving a number is right — reconciling to finance, checking row
        counts, investigating anomalies. Evaluating AI is the same instinct applied to a new kind of
        output.
      </p>
      <h3>Row-level security and governance</h3>
      <p>
        If a user should not see a region’s data in a report, they should not see it through an
        agent either. Security defined in the model travels with it; security bolted onto a prompt
        does not.
      </p>
      <h3>Stakeholder translation</h3>
      <p>
        Turning a vague request into a precise question is most of a BI developer’s job. It is also
        most of designing a useful AI use case.
      </p>

      <h2>What is genuinely new</h2>
      <ul>
        <li>
          <strong>Non-determinism.</strong> The same question can produce different answers. Testing
          shifts from “is this number correct?” to “how often is the answer correct, and how bad are
          the failures?”
        </li>
        <li>
          <strong>Prompts and tools as code.</strong> System prompts, tool descriptions and
          retrieval settings need versioning and review just like DAX.
        </li>
        <li>
          <strong>Evaluation as a discipline.</strong> Golden question sets, graders and trace
          review become a permanent part of the release process.
        </li>
        <li>
          <strong>New failure modes.</strong> Hallucination, prompt injection and over-confident
          answers have no direct equivalent in a dashboard.
        </li>
      </ul>

      <h2>Advice for BI developers curious about AI</h2>
      <ol>
        <li>Start with the semantic model you know best and improve its descriptions and naming.</li>
        <li>Try Copilot or a simple agent against it and write down where it gets things wrong.</li>
        <li>Learn enough Python to call a model API and define a tool.</li>
        <li>Build a small evaluation set of real business questions with known answers.</li>
        <li>Treat it like any other release: version, test, review, monitor.</li>
      </ol>
      <p>
        The organisations that get the most from agentic AI will be the ones whose data was already
        well modelled, well defined and well governed. That is the BI team’s work — and a strong
        reason for BI developers to be in the room.
      </p>
    </>
  );
}
