import React from 'react';

const ApiBlock = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] py-[120px]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          {/* Left Content Side */}
            <div className="flex flex-col max-w-[540px]">
              <h2 className="text-[#1A1A1A] font-sans text-[56px] leading-[1.1] font-normal tracking-[-0.01em] mb-[24px]">
                Build on Brittalent Infrastructure
              </h2>
              <p className="text-[#7D7D7D] font-sans text-[20px] leading-[1.5] font-normal mb-[32px]">
              Add compliance checks to any AI agent, copilot, or internal tool with one API. Every piece of content validated against regulations and firm policies before it reaches users.
            </p>
            <a
              href="/developers"
              className="inline-flex items-center justify-center bg-[#121212] text-white px-[24px] py-[14px] rounded-[4px] text-[14px] font-medium uppercase tracking-wider transition-opacity hover:opacity-90 w-fit"
            >
              Learn More
            </a>
          </div>

          {/* Right API View Side */}
          <div className="bg-[#E6E6E6] rounded-[12px] p-[24px] shadow-glass border border-[#E6E6E6]">
            {/* Request Block */}
            <div className="mb-[24px]">
              <div className="text-[#1A1A1A] text-[14px] font-medium mb-[12px] font-sans">Request</div>
              <div className="bg-[#1C1C1C] rounded-[8px] p-[20px] overflow-x-auto border border-white/5">
                <pre className="font-mono text-[14px] leading-[1.6]">
                  <code className="text-[#D4D4D4]">
                      <span className="text-[#A9DC76]">curl</span> -X POST <span className="text-[#FFD866]">"api.brittalent.ai/v1/validate"</span> \
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;-H <span className="text-[#FFD866]">"Authorization: Bearer bt_key_..."</span> \
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;-d <span className="text-[#FFD866]">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"text"</span>: <span className="text-[#FFD866]">"Our fund will outperform the market."</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"document_type"</span>: <span className="text-[#FFD866]">"investor_letter"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"audience"</span>: <span className="text-[#FFD866]">"retail_US"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"rules"</span>: [<span className="text-[#FFD866]">"sec"</span>,<span className="text-[#FFD866]">"finra"</span>]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FFD866]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Response Block */}
            <div>
              <div className="text-[#1A1A1A] text-[14px] font-medium mb-[12px] font-sans">Response</div>
              <div className="bg-[#1C1C1C] rounded-[8px] p-[20px] overflow-x-auto border border-white/5">
                <pre className="font-mono text-[14px] leading-[1.6]">
                  <code className="text-[#D4D4D4]">
                    <span className="text-[#D4D4D4]">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"status"</span>: <span className="text-[#FFD866]">"warning"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"evidence_id"</span>: <span className="text-[#FFD866]">"ev_8f3k2j"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"checks"</span>: <span className="text-[#D4D4D4]">{"{ "}</span><span className="text-[#FC9867]">"passed"</span>: <span className="text-[#AB9DF2]">12</span>, <span className="text-[#FC9867]">"failed"</span>: <span className="text-[#AB9DF2]">1</span><span className="text-[#D4D4D4]">{" }"}</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"violations"</span>: [<span className="text-[#D4D4D4]">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"rule"</span>: <span className="text-[#FFD866]">"no_performance_projection"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"ref"</span>: <span className="text-[#FFD866]">"FINRA 2210(d)(1)(F)"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"severity"</span>: <span className="text-[#FF6188]">"high"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"snippet"</span>: <span className="text-[#FFD866]">"will outperform the market"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FC9867]">"fix"</span>: <span className="text-[#FFD866]">"is designed to seek long-term growth"</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#D4D4D4]">{"}]"}</span>
                    <br />
                    <span className="text-[#D4D4D4]">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiBlock;