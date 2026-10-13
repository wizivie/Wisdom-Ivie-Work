export default function Post() {
  return (
    <>
      <p className="lead">
        For years, the standard Power BI release process was: open the .pbix, make a change, hit
        publish, and hope. That worked for a handful of reports. It does not work for a reporting
        estate the business runs on. The good news: the tooling to treat BI like software now
        exists.
      </p>

      <h2>1. Get the model out of the binary</h2>
      <p>
        A <code>.pbix</code> file is a zip archive — you cannot meaningfully diff or review it. The
        Power BI Project format (<code>.pbip</code>) saves the semantic model and report as folders
        of text files, with the model definition in TMDL (Tabular Model Definition Language). Every
        measure, relationship and table becomes a readable file.
      </p>
      <pre>
        <code>{`Claims.SemanticModel/
  definition/
    tables/
      Claims.tmdl
      Date.tmdl
    relationships.tmdl
    model.tmdl
Claims.Report/
  definition/ ...`}</code>
      </pre>
      <p>
        Once the model is text, a change to a measure shows up as a three-line diff that a colleague
        can review in a pull request.
      </p>

      <h2>2. Put it in Git and use branches</h2>
      <ul>
        <li>One repository per domain (or per model family), not one per report.</li>
        <li>Short-lived feature branches, merged through pull requests with at least one reviewer.</li>
        <li>
          Fabric workspaces can be connected directly to Azure DevOps or GitHub through Git
          integration, so a development workspace stays in sync with a branch.
        </li>
        <li>Never commit data or credentials — only definitions.</li>
      </ul>

      <h2>3. Automate the checks</h2>
      <p>
        Reviews are better when the boring checks are already done. In the pull request pipeline:
      </p>
      <ul>
        <li>
          Run Tabular Editor’s <strong>Best Practice Analyzer</strong> against the TMDL and fail the
          build on high-severity rules.
        </li>
        <li>
          Run <strong>data tests</strong>: DAX queries that assert known totals, row counts or
          reconciliation to source (for example, “premium for last closed month equals finance
          ledger within tolerance”).
        </li>
        <li>Check that every visible measure has a description and a format string.</li>
      </ul>

      <h2>4. Promote, don’t republish</h2>
      <p>
        Use separate Development, Test and Production workspaces and move content between them with
        deployment pipelines (Fabric deployment pipelines, or Azure DevOps / GitHub Actions calling
        the REST APIs). Deployment rules swap data source connections and parameters per
        environment, so the same artefact runs against test data and live data without manual
        edits.
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Who</th>
            <th>Gate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Development</td>
            <td>Developers</td>
            <td>Branch synced; local tests pass</td>
          </tr>
          <tr>
            <td>Test</td>
            <td>Developers + key users</td>
            <td>Automated checks + user acceptance</td>
          </tr>
          <tr>
            <td>Production</td>
            <td>Everyone</td>
            <td>Approved release; change logged</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Watch it in production</h2>
      <p>
        Releasing is not the end. Monitor refresh failures and durations, capacity usage, and which
        reports are actually used. Unused reports are maintenance cost with no benefit; retire them.
      </p>

      <h2>Start small</h2>
      <p>
        You do not need the whole pipeline on day one. Convert your most critical model to PBIP,
        put it in Git, require a pull request for changes, and add one data test. Each step removes
        a category of “how did this change?” incidents — and makes the team’s work visible.
      </p>
    </>
  );
}
