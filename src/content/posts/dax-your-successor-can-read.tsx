export default function Post() {
  return (
    <>
      <p className="lead">
        The most expensive DAX is not the slowest. It is the measure nobody dares to change because
        nobody understands it. Readable DAX is a gift to your future self, your team, and whoever
        inherits the model when you move on.
      </p>

      <h2>Name measures for the reader, not the author</h2>
      <p>
        Measure names are the interface of the model. They appear in visuals, in tooltips, in
        Copilot answers, and in every conversation about the numbers. Pick a convention and keep it.
      </p>
      <ul>
        <li>
          Use business language: <code>Gross Written Premium</code>, not <code>GWP_calc2</code>.
        </li>
        <li>
          Put the qualifier at the end so related measures sort together:{" "}
          <code>Claims Paid</code>, <code>Claims Paid YoY %</code>,{" "}
          <code>Claims Paid Rolling 12M</code>.
        </li>
        <li>Never reuse a name with a different meaning in another model.</li>
        <li>
          Prefix helper measures (for example with an underscore) and hide them, so report builders
          only see what they should use.
        </li>
      </ul>

      <h2>Use variables to tell the story</h2>
      <p>
        Variables make DAX faster (each is evaluated once) and, more importantly, readable. Each{" "}
        <code>VAR</code> should be a step a colleague could explain out loud.
      </p>
      <pre>
        <code>{`Loss Ratio % =
VAR ClaimsIncurred = [Claims Paid] + [Claims Reserve Movement]
VAR PremiumEarned  = [Earned Premium]
VAR Result         = DIVIDE ( ClaimsIncurred, PremiumEarned )
RETURN
    Result`}</code>
      </pre>
      <p>
        Returning a named <code>Result</code> variable looks redundant until you debug: you can swap
        the <code>RETURN</code> to any intermediate variable and see exactly where a number goes
        wrong.
      </p>

      <h2>Small habits, big difference</h2>
      <h3>Always DIVIDE</h3>
      <p>
        <code>DIVIDE</code> handles zero and blank denominators safely and states intent. Reserve the{" "}
        <code>/</code> operator for cases where the denominator is guaranteed non-zero.
      </p>
      <h3>Reference measures, don’t repeat logic</h3>
      <p>
        Build a small set of base measures (<code>[Policies Sold]</code>,{" "}
        <code>[Earned Premium]</code>) and compose everything else from them. When a definition
        changes, you change it once.
      </p>
      <h3>Fully qualify columns, never measures</h3>
      <p>
        Write <code>Policy[Start Date]</code> for columns and <code>[Earned Premium]</code> for
        measures. Anyone reading the code can then tell at a glance which is which — a convention
        recommended by SQLBI and enforced by most Best Practice Analyzer rule sets.
      </p>
      <h3>Format consistently</h3>
      <p>
        Run code through DAX Formatter or the formatter in Tabular Editor. Consistent line breaks
        make reviews and diffs readable, which matters once your model lives in Git.
      </p>

      <h2>Organise the model, not just the code</h2>
      <ul>
        <li>
          Use <strong>display folders</strong> grouped by business area (Premium, Claims, Retention)
          rather than one long alphabetical list.
        </li>
        <li>
          Fill in <strong>descriptions</strong> on every visible measure. They surface as tooltips in
          the field list and give AI assistants the context they need to pick the right measure.
        </li>
        <li>Set format strings in the model, not in each visual.</li>
        <li>
          Consider a dedicated, empty <em>measures table</em> so measures are easy to find and are
          not tied to a fact table that might be refactored.
        </li>
      </ul>

      <h2>Make the rules automatic</h2>
      <p>
        Conventions only survive if they are checked. Tabular Editor’s Best Practice Analyzer can
        flag missing descriptions, bi-directional relationships, unformatted measures and more —
        and it can run in a deployment pipeline so issues are caught before they reach production.
      </p>
      <blockquote>
        Write every measure as if the person maintaining it will be you, in two years, at 5pm on a
        Friday before a board pack goes out.
      </blockquote>
    </>
  );
}
