# Dual Calculator App

Week 2 Project — Operators & Expressions

A simple, beginner-friendly dual calculator web page that contains:
- A Tip Calculator (bill, tip %, number of people → tip amount, total, per person)
- A Basic Calculator (0–9, ., +, -, *, /, %, C, DEL, =)

Built with plain HTML, CSS, and vanilla JavaScript. The JavaScript is intentionally simple and demonstrates DOM basics (selecting elements, reading/writing text, and changing styles).

Files
- [index.html](index.html) — Main page with both calculators.
- [styles.css](styles.css) — Styles and responsive layout.
- [script.js](script.js) — JavaScript logic for both calculators (DOM selection, event listeners, updates).

How to use
1. Open [index.html](index.html) in your browser (double-click or use `File → Open`).
2. Tip Calculator (left card): enter a bill amount, tip percentage, and number of people, then click "Calculate Tip". Results update below.
3. Basic Calculator (right card): click the buttons to build an expression and press `=` to evaluate. Use `C` to clear and `DEL` to remove the last character.

Teaching notes (for students)
- The JS uses `document.getElementById` and `document.querySelector` to access elements.
- Results are shown with `.textContent` or `.value` and small visual feedback is applied via `element.style` when errors occur.
- The basic calculator uses a simple evaluation method for teaching (`Function`) — in production you'd use a safe parser.

Known limitations
- The expression evaluator is simple and may accept some inputs that a full parser would reject; it is used here for clarity and learning.

Want changes?
If you'd like keyboard support, extra operators, or safer evaluation, tell me which feature to add next.