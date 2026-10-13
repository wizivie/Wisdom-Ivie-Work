export default function Post() {
  return (
    <>
      <p className="lead">
        Every few years a new tool promises that data modelling no longer matters. Then the reports
        get slow, two dashboards disagree on revenue, and someone quietly rebuilds a star schema.
        The boring shape keeps winning because it matches how people actually ask questions.
      </p>

      <h2>Why the star shape works</h2>
      <p>
        A star schema separates <strong>what happened</strong> (facts: a quote, a policy sale, a
        claim payment) from <strong>the context you slice it by</strong> (dimensions: date,
        product, channel, customer). The VertiPaq engine behind Power BI is built for exactly this
        pattern: narrow, long fact tables compress beautifully, and filters flowing one way from
        small dimensions into big facts are cheap.
      </p>
      <p>
        It also matches the mental model of the people using the report. “Claims paid, by month,
        by product, for the broker channel” is a fact filtered by three dimensions. When the model
        has the same shape as the question, both DAX and self-service get easier.
      </p>

      <h2>Decide the grain before anything else</h2>
      <p>
        The grain is the sentence that describes one row of a fact table: <em>one row per policy
        per day</em>, or <em>one row per claim payment</em>. Most modelling problems I see trace
        back to a fact table whose grain was never written down — so it quietly mixes header and
        line-level data, and every total is slightly wrong.
      </p>
      <ul>
        <li>Write the grain in the table description before writing any Power Query.</li>
        <li>Keep facts at the lowest grain the business genuinely needs; aggregate later.</li>
        <li>
          When two processes have different grains (quotes and claims), give them separate fact
          tables that share dimensions — do not force them into one.
        </li>
      </ul>

      <h2>Conformed dimensions are the real product</h2>
      <p>
        A single, shared <code>Date</code>, <code>Product</code> and <code>Customer</code> dimension
        used by every fact table is what lets someone put quotes, sales and claims on one page and
        trust the comparison. Build them once, own them carefully, and reuse them across models.
      </p>
      <blockquote>
        If two reports disagree, the cause is almost never DAX. It is two slightly different
        definitions of the same dimension.
      </blockquote>

      <h2>Modelling habits that pay off</h2>
      <h3>Single-direction relationships by default</h3>
      <p>
        Bi-directional filters feel convenient and create ambiguity, slower queries and surprising
        totals. Reach for them only for a specific, documented reason — and prefer{" "}
        <code>CROSSFILTER</code> inside a measure when you need the behaviour in one place.
      </p>
      <h3>A proper date table, marked as such</h3>
      <p>
        Turn off auto date/time, build one date dimension with the attributes the business uses
        (financial year, week starting Monday, working day flags) and mark it as a date table. Time
        intelligence becomes predictable and the model gets smaller.
      </p>
      <h3>Remove what nobody filters by</h3>
      <p>
        High-cardinality columns — GUIDs, free-text notes, precise timestamps — are the main reason
        models balloon. If a column is not used for filtering, grouping or a measure, drop it
        upstream. Split date-times into a date key and, only if needed, a time-of-day bucket.
      </p>
      <h3>Push transformations upstream</h3>
      <p>
        Follow Roche’s maxim: transform data as far upstream as possible, and as far downstream as
        necessary. SQL views or a lakehouse layer beat Power Query; Power Query beats calculated
        columns. The closer to the source, the more reusable the logic.
      </p>

      <h2>A quick health check</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Healthy answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Can you state each fact table’s grain in one sentence?</td>
            <td>Yes, and it is in the table description</td>
          </tr>
          <tr>
            <td>How many bi-directional relationships?</td>
            <td>Zero, or each one justified</td>
          </tr>
          <tr>
            <td>Is auto date/time off?</td>
            <td>Yes, with one marked date table</td>
          </tr>
          <tr>
            <td>Are dimensions shared across models?</td>
            <td>Yes — conformed and owned</td>
          </tr>
          <tr>
            <td>Largest columns by size?</td>
            <td>Known, via VertiPaq Analyzer, and all justified</td>
          </tr>
        </tbody>
      </table>

      <h2>The payoff</h2>
      <p>
        A clean star schema is not about purity. It makes reports faster, DAX shorter, self-service
        safer — and, increasingly, it makes data legible to AI. An agent asked to answer questions
        from a well-shaped model with clear names has a fighting chance. One asked to navigate a
        flat 200-column extract does not.
      </p>
    </>
  );
}
