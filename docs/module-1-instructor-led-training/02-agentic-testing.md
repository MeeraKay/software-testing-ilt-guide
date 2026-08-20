# 2. Agentic Testing: From Requirement to Test Cases

## What is agentic testing?

**Agentic Testing** means augmenting testers with AI agents to extend, accelerate, and simplify their work — ultimately helping them be more productive and find greater joy in testing.

## 1. Out-of-the-box agents — Autopilot for Testers

Autopilot for Testers is a collection of AI-powered digital systems (agents) designed to boost the productivity of testers throughout the entire testing lifecycle.

These capabilities are integrated into UiPath Studio Desktop and UiPath Test Manager.

### Agents you'll explore in hands-on

In the hands-on exercises ahead, you'll work with two key agents:

✅ **Evaluation Agent** — Analyzes and evaluates requirements to ensure clarity, completeness, and testability

✅ **Test Case Generation Agent** — Automatically generates comprehensive test cases based on requirements, saving time and improving coverage

### Hands-on: From Requirement to Test Cases

Let's see how Autopilot for Testers helps you move from requirements to test cases with a real-world example.

<div style="background-color: #f5f5f5; border: 1px solid #ddd; border-radius: 4px; margin: 16px 0; overflow: hidden;">
  <div style="position: relative; padding: 16px; background-color: #f5f5f5;">
    <button id="copyBtn" onclick="copyText()" style="position: absolute; top: 12px; right: 12px; background-color: white; border: 2px solid #ff6b35; color: #ff6b35; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 13px; z-index: 1000; transition: all 0.3s ease;">📋 Copy</button>
    <pre id="requirementBlock" style="margin: 0; padding: 40px 16px 16px 16px; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.5; color: #333; white-space: pre-wrap; word-wrap: break-word;">As a potential UiBank customer, I want to apply for a loan via the UiPath Banking Application, so that I can quickly secure the funds I need.

## User Flow

* The applicant starts the loan application in the 'Loans' screen

* The applicant clicks 'Apply For A Loan' 

* The system redirects to https://uibank.uipath.com/loans/apply

* The applicant provides an 'Email Address'.
  * This field requires an email address in a valid format.

* The applicant enters a 'Loan Amount'.
  * This field accepts only positive integer values.

* The applicant selects a 'Loan Term'.
  * This field provides the options '1', '3', '5', and '10' years.

* The applicant enters their 'Yearly Income'.
  * This field accepts only positive integer values.

* The applicant enters their 'Age'.
  * This field accepts only positive integer values.

* The applicant then clicks the 'Submit Loan Application' 

* The applicant is notified whether the loan application is approved or rejected on the next page

## Acceptance Criteria

* Applicants under 18 and over 65 years of age:
  * Reject with "Not approved due to age."

* Missing at least one mandatory field on submission:
  * No error, no action, applicant remains on the same page.

* Applicants 18-65 years old, requesting >$100,000 without income >3x loan amount:
  * Reject with "Not approved over $100,000 without sufficient income."

* Applicants 18-65 years old, requesting <=$100,000, any term, with income >= loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"

* Applicants 18-65, requesting over $50,000 for a term >5 years, with income >3x loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"

* Applicants 18-65, requesting >$20,000 for 1 year, with income >=2x loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"

* Applicants 18-65, loan <=$50,000, term <=5 years, income >= loan amount:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"
      
* Applicants 18-65, requesting <=$10,000, any term, without specific income ratio requirements:
  * Approve with "Congrats! You've been approved for a loan with UiBank!"</pre>
  </div>
</div>

<script>
function copyText() {
  const text = document.getElementById('requirementBlock').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Copied!';
    btn.style.borderColor = '#4caf50';
    btn.style.color = '#4caf50';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.borderColor = '#ff6b35';
      btn.style.color = '#ff6b35';
    }, 2000);
  }).catch(err => console.log('Copy failed:', err));
}
</script>


## 2. Built Your Way — Custom AI Agents

Beyond the out-of-the-box capabilities, you have the full power to build your own AI agents tailored specifically to your unique testing needs.

Custom agents give you the flexibility to:

- Solve problems specific to your testing processes
- Integrate with your existing tools and workflows
- Automate repetitive testing tasks your way
- Extend Test Cloud with agent-driven innovation

As the final topic of this instructor-led training, you'll **build your own custom AI agent** from scratch. You'll learn the anatomy of an agent, how to design it for your needs, and how to deploy it—creating something powerful and uniquely yours.

---

[Next → Getting Started in Studio](03-getting-started-studio.md){: .md-button .md-button--primary}

---
