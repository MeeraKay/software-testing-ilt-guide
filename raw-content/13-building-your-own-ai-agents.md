Slide 13 of 28
Building your own AI agents
By
null null

Comparing agents with robots

Agents are goal-based, act independently, and can make dynamic decisions. They are best suited for ad hoc tasks that require high adaptability. They are the next evolution in test automation.

They can plan, act, learn, and adapt—making them ideal for processes that require judgment, flexibility, and contextual awareness.

Unlike deterministic systems such as RPA robots, which follow structured logic and fixed rules, agents use a probabilistic approach to make decisions based on patterns and real-time data. This makes agents highly suited for automating unstructured, exception-heavy workflows where conditions and outcomes vary.

Robots, on the other hand, are rule-based, act predictably, and are suitable for deterministic actions.
Robots are best used for routine tasks that require high reliability and efficiency. They are structured and logical, and work on efficiency-oriented systematic processing.

Agents and robots can work together to solve end-to-end business problems and to enable enterprise-grade agentic testing. Agents handle tasks that robots may not be able to, whereas robots help institute control, determinism, and governance for agents as they operate.

[VIDEO: embedded walkthrough -- "Let's watch the video to learn more on how to build a custom AI agent"]

Let's look at the components of an AI agent:

An agent consists of four core components:

[TAB INTERACTION: 1. PROMPT / 2. CONTEXT / 3. TOOLS / 4. ESCALATIONS -- content of each tab below]

1. PROMPT
Instructions or plan for the agent, that determine its role, goal, and constraints.

A high-performing agent requires instructions that clearly determine a plan for action, incorporate inputs in a well-structured way, and gives guidance on when to run tools, access enterprise context, or escalate to a human.

Prompts are of two types: user prompts and system prompts. We interact with prompt via the input and output arguments.

2. CONTEXT
Information sources the agent uses to ground decisions—such as knowledge bases, or previous interactions. Context is based on:

Context Grounding, give agents access to permissioned knowledge bases. This helps agents reason using business-specific data.

3. TOOLS
Tools offer agents both access to critical context from data stored in business applications, and the ability to execute actions based on objectives outlined in the prompt. Tools are how the agent's reasoning and planning can turn into action.

The agent invokes tools based on the prompt.

Available tools: activities, automations, micro automations, or other agents.

For all tools configured with agents, you can establish Guardrails to ensure compliant use of tools by your agent.

4. ESCALATIONS
The human in the loop.

Agents can involve a human when necessary, to help gather additional information or review arguments.

Agent escalation paths: Action Center action apps, communication channels.

Agent Memory is a service inside each agent that helps it remember facts and observations as it works. The service stores escalations for each agent run at design time, and for running processes with agents at runtime, to support a long-term memory the agent can refer to

Evaluations

When you're building an agent, the goal is to make it reliable—something you can trust to give the right output consistently. Evaluations help you figure out if your agent is doing a good job or if it needs improvement.

An evaluation is a pair between an input and an assertion—or evaluator—made on the output. The evaluator is a defined condition or rule used to assess whether the agent's output meets the expected output.

Evaluation sets are logical groupings of evaluations and evaluators.

Evaluation results are traces for completed evaluation runs that assess the performance of an agent. During these runs, the agent's accuracy, efficiency, and decision-making ability are measured and scored on how well the agent performs.

Traces

Traces are records of how an agent and evaluations run. You can use traces to troubleshoot agents and improve performance. There are two types of records in traces, each marked separately:

Traces for agent runs

Traces for evaluation runs

You can add past agent runs to evaluation sets if you decide that using past executions is a good way to build evaluations.

Summary

Agents handle tasks that robots may not be able to, whereas robots help institute control, determinism, and governance for agents as they operate.

Exercise

Build an agent that generates data for the Apply for a loan workflow, then calls it as a tool, reporting the results.

An SAP Agent example
[IMAGE: SAP Agent example screenshot/diagram]

End of Instructor-Led Training

Congratulations! You have completed the instructor-led portion of this course.

To reinforce your learning and qualify for course completion, proceed with the following sections:

Course Completion Exercises – Complete and submit the required exercises.

Additional Self-Paced Topics – Explore optional topics to deepen your understanding and extend your skills.
