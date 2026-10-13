export default function Post() {
  return (
    <>
      <p className="lead">
        “Can we just ask the data a question?” is now one of the most common requests a BI team
        hears. Agentic AI makes it possible. The challenge is doing it without losing the
        definitions, security and auditability that make the data trustworthy in the first place.
      </p>

      <h2>Three ways to connect an agent to data</h2>
      <table>
        <thead>
          <tr>
            <th>Pattern</th>
            <th>How it works</th>
            <th>Main risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Text-to-SQL on raw tables</td>
            <td>The model writes SQL against the warehouse</td>
            <td>Re-invents metric logic; inconsistent answers</td>
          </tr>
          <tr>
            <td>Text-to-DAX on the semantic model</td>
            <td>The model writes DAX against curated measures</td>
            <td>Still free-form code; needs guardrails</td>
          </tr>
          <tr>
            <td>Curated tools</td>
            <td>The model calls named functions with parameters</td>
            <td>Less flexible, but predictable and testable</td>
          </tr>
        </tbody>
      </table>
      <p>
        In practice the best systems combine the last two: a small set of well-described tools for
        the most common questions, and constrained query generation against the semantic model for
        the long tail.
      </p>

      <h2>Tools are the new API</h2>
      <p>
        With tool use (also called function calling), you describe operations the model may invoke,
        and your code executes them. The Model Context Protocol (MCP) standardises how those tools
        are exposed, so the same data tools can be reused across assistants and agent frameworks.
      </p>
      <pre>
        <code>{`{
  "name": "get_measure_by_period",
  "description": "Return an approved business measure for a period, optionally split by one dimension.",
  "input_schema": {
    "type": "object",
    "properties": {
      "measure": { "enum": ["Gross Written Premium", "Claims Paid", "Policies Sold"] },
      "period":  { "type": "string", "description": "e.g. 2026-Q2 or 2026-09" },
      "split_by": { "enum": ["Product", "Channel", "Region"] }
    },
    "required": ["measure", "period"]
  }
}`}</code>
      </pre>
      <p>
        Notice the <code>enum</code>: the agent can only ask for measures that already exist in the
        model, with their agreed definitions. It cannot invent a new version of “premium”.
      </p>

      <h2>Guardrails that matter</h2>
      <h3>Run as the user, not as a service account</h3>
      <p>
        Queries should execute with the requesting user’s identity so row-level and object-level
        security in the model still apply. An agent with god-mode credentials is a data leak
        waiting to happen.
      </p>
      <h3>Read-only, bounded and logged</h3>
      <ul>
        <li>Agents query; they do not write back to production data.</li>
        <li>Limit rows returned, query time and the number of tool calls per request.</li>
        <li>Log every tool call, its parameters and the result for later review.</li>
      </ul>
      <h3>Show the working</h3>
      <p>
        Answers should cite the measure, filters and period used — ideally with a link to the
        equivalent report. Users trust what they can verify, and reviewers can spot errors quickly.
      </p>
      <h3>Treat data as untrusted input</h3>
      <p>
        Free-text fields (claim notes, complaint descriptions) can contain instructions that a model
        may follow. Keep tool outputs clearly separated from instructions and never let retrieved
        content trigger new actions on its own.
      </p>

      <h2>Prepare the model for its new audience</h2>
      <ol>
        <li>Hide technical columns and helper measures.</li>
        <li>Write descriptions for every visible table, column and measure.</li>
        <li>Add synonyms for the words people actually use (“GWP”, “sales”, “new business”).</li>
        <li>Remove ambiguity: one measure per concept, clearly named.</li>
        <li>Build an evaluation set of real questions with verified answers before launch.</li>
      </ol>
      <p>
        The semantic model was always meant to be the single source of truth for people. Done well,
        it becomes the single source of truth for agents too.
      </p>
    </>
  );
}
