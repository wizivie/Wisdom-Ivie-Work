export default function Post() {
  return (
    <>
      <p className="lead">
        In insurance and financial services, “it seemed to work in the demo” is not evidence. If an
        AI agent influences how customers are treated, you need to show — to your risk team, your
        auditors and potentially the regulator — that it behaves well, consistently, and that you
        will notice when it stops.
      </p>

      <h2>Why accuracy alone isn’t enough</h2>
      <p>
        A single accuracy score hides what matters. An agent that is right 95% of the time but
        confidently wrong on vulnerable-customer cases is worse than one that is right 90% of the
        time and escalates whenever it is unsure. UK firms operating under the FCA’s Consumer Duty
        must be able to evidence good outcomes for customers, and that includes outcomes shaped by
        automated systems.
      </p>

      <h2>Build a golden dataset first</h2>
      <p>
        Before tuning prompts, collect real questions or cases with agreed correct answers. A good
        golden set is:
      </p>
      <ul>
        <li>
          <strong>Representative</strong> — sampled from real traffic, not invented by the team.
        </li>
        <li>
          <strong>Stratified</strong> — deliberately includes edge cases, complaints, vulnerable
          customers and questions the agent should refuse.
        </li>
        <li>
          <strong>Owned</strong> — answers signed off by subject-matter experts, versioned and
          reviewed as policy changes.
        </li>
      </ul>

      <h2>Measure more than one thing</h2>
      <table>
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Example check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Correctness</td>
            <td>Answer matches the approved answer or source data</td>
          </tr>
          <tr>
            <td>Groundedness</td>
            <td>Every claim is supported by retrieved documents or tool results</td>
          </tr>
          <tr>
            <td>Tool use</td>
            <td>Right tool, right parameters, no unnecessary calls</td>
          </tr>
          <tr>
            <td>Safety and policy</td>
            <td>Refuses out-of-scope requests; no advice it isn’t permitted to give</td>
          </tr>
          <tr>
            <td>Escalation</td>
            <td>Hands off to a human when confidence is low or the case is sensitive</td>
          </tr>
          <tr>
            <td>Fairness</td>
            <td>Performance is consistent across customer groups</td>
          </tr>
        </tbody>
      </table>
      <p>
        Some checks are deterministic (did it call the right tool?). Others need a grader — often a
        second model with a strict rubric. Calibrate any model-based grader against human judgement
        before trusting it.
      </p>

      <h2>Read the traces</h2>
      <p>
        Agents take multi-step paths: plan, call a tool, read the result, call another, answer.
        Scores tell you <em>that</em> something failed; traces tell you <em>why</em>. Schedule
        regular trace reviews with a domain expert in the room. The most valuable findings are
        usually patterns no metric was designed to catch.
      </p>

      <h2>Human in the loop, by design</h2>
      <ul>
        <li>Define in advance which decisions the agent may make alone and which need sign-off.</li>
        <li>Set confidence or risk thresholds that route cases to people.</li>
        <li>Capture reviewer corrections and feed them back into the golden set.</li>
      </ul>

      <h2>Make evaluation part of the release</h2>
      <p>
        Treat the evaluation suite like automated tests. Run it on every change to a prompt, tool,
        model version or retrieval setting, and block releases that regress beyond an agreed
        tolerance. In production, sample live interactions for ongoing review and monitor drift.
      </p>

      <h2>What good evidence looks like</h2>
      <blockquote>
        A versioned golden dataset, scores for every release, documented thresholds, trace review
        notes, and a clear owner. If you can show that pack to an auditor, you are in good shape.
      </blockquote>
      <p>
        None of this is exotic. It is the same discipline BI teams apply to reconciling a finance
        report — applied to a system whose outputs are words instead of numbers.
      </p>
    </>
  );
}
